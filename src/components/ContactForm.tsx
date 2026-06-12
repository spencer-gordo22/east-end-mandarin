"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { content, CONTACT_EMAIL } from "@/content";

const f = content.contact.form;

type FormValues = {
  name: string;
  email: string;
  level: string;
  meet: string[];
  located: string;
  times: string[];
  message: string;
  botcheck: string; // honeypot — should stay empty
};

type FormErrors = Partial<Record<"name" | "email" | "level" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormValues = {
  name: "",
  email: "",
  level: "",
  meet: [],
  located: "",
  times: [],
  message: "",
  botcheck: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.level) errors.level = "Please choose a level.";
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

const labelClass = "block text-sm font-medium text-charcoal";
const controlBase =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-charcoal transition-colors placeholder:text-charcoal-soft/50 focus:border-jade";

// Tap-friendly selectable chip; the real input is visually hidden inside.
const chipClass =
  "cursor-pointer select-none rounded-full border border-line-strong bg-white px-4 py-2.5 text-sm font-medium text-charcoal transition duration-150 ease-out hover:border-jade active:scale-[0.97] has-[:checked]:border-jade has-[:checked]:bg-jade has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-jade";

function borderFor(error?: string) {
  return error ? "border-red-400" : "border-line-strong";
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const prefersReduced = useReducedMotion();

  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

  function clearError(key: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    clearError(name as keyof FormErrors);
  }

  function selectLevel(option: string) {
    setValues((prev) => ({ ...prev, level: option }));
    clearError("level");
  }

  function toggleTime(option: string) {
    setValues((prev) => ({
      ...prev,
      times: prev.times.includes(option)
        ? prev.times.filter((t) => t !== option)
        : [...prev.times, option],
    }));
  }

  function toggleMeet(option: string) {
    setValues((prev) => ({
      ...prev,
      meet: prev.meet.includes(option)
        ? prev.meet.filter((m) => m !== option)
        : [...prev.meet, option],
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: a filled hidden field means a bot — silently accept.
    if (values.botcheck) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!accessKey) {
      // Most common production cause: the env var is missing or unprefixed.
      console.error(
        "[contact] NEXT_PUBLIC_FORM_ACCESS_KEY is not set. In Vercel, add an " +
          "env var named exactly NEXT_PUBLIC_FORM_ACCESS_KEY (the NEXT_PUBLIC_ " +
          "prefix is required to expose it to the browser), then redeploy.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New inquiry — ${content.brand.name}`,
          from_name: content.brand.name,
          name: values.name,
          email: values.email,
          "Learner level": values.level,
          "How would you like to meet": values.meet.length
            ? values.meet.join(", ")
            : "Not specified",
          ...(values.meet.includes("In person") && values.located.trim()
            ? { "Where are you located": values.located.trim() }
            : {}),
          "Preferred times": values.times.length
            ? values.times.join(", ")
            : "Not specified",
          message: values.message,
        }),
      });

      // Web3Forms always replies with JSON: { success: boolean, message: string }.
      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (res.ok && data?.success) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        // Surface Web3Forms' actual error to the console for diagnosis,
        // while keeping the friendly message in the UI.
        console.error(
          `[contact] Web3Forms submission failed (HTTP ${res.status}): ${
            data?.message ?? "no message returned"
          }`,
        );
        setStatus("error");
      }
    } catch (err) {
      console.error("[contact] Network error submitting to Web3Forms:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-jade-soft text-jade">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-5 font-serif text-2xl tracking-tight text-charcoal">
          {f.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-charcoal-soft">
          {f.successBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
        >
          Send another message
        </button>
      </div>
    );
  }

  const [errBefore, errAfter] = f.errorBody.split("{email}");

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8"
    >
      {status === "error" ? (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <p className="font-semibold">{f.errorTitle}</p>
          <p className="mt-1">
            {errBefore}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
            {errAfter}
          </p>
        </div>
      ) : null}

      {/* Honeypot — hidden from humans; bots that fill it are rejected */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botcheck">Leave this field empty</label>
        <input
          id="botcheck"
          type="text"
          name="botcheck"
          value={values.botcheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            {f.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder={f.namePlaceholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${controlBase} ${borderFor(errors.name)}`}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            {f.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder={f.emailPlaceholder}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${controlBase} ${borderFor(errors.email)}`}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      {/* Learner level — single-select chips */}
      <fieldset
        className="mt-5"
        aria-describedby={errors.level ? "level-error" : undefined}
      >
        <legend className={labelClass}>{f.levelLabel}</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {f.levelOptions.map((option) => (
            <label key={option} className={chipClass}>
              <input
                type="radio"
                name="level"
                value={option}
                checked={values.level === option}
                onChange={() => selectLevel(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.level ? (
          <p id="level-error" className="mt-2 text-sm text-red-700">
            {errors.level}
          </p>
        ) : null}
      </fieldset>

      {/* How would you like to meet? — multi-select chips, with a
          conditional location field shown only when meeting in person */}
      <fieldset className="mt-5">
        <legend className={labelClass}>{f.meetLabel}</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {f.meetOptions.map((option) => (
            <label key={option} className={chipClass}>
              <input
                type="checkbox"
                name="meet"
                value={option}
                checked={values.meet.includes(option)}
                onChange={() => toggleMeet(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {values.meet.includes("In person") ? (
            <motion.div
              key="located"
              initial={prefersReduced ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <label htmlFor="located" className={labelClass}>
                  {f.locatedLabel}
                </label>
                <input
                  id="located"
                  name="located"
                  type="text"
                  autoComplete="address-level2"
                  value={values.located}
                  onChange={handleChange}
                  placeholder={f.locatedPlaceholder}
                  className={`${controlBase} border-line-strong`}
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </fieldset>

      {/* Preferred times — multi-select chips (optional) */}
      <fieldset className="mt-5">
        <legend className={labelClass}>{f.timesLabel}</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {f.timesOptions.map((option) => (
            <label key={option} className={chipClass}>
              <input
                type="checkbox"
                name="times"
                value={option}
                checked={values.times.includes(option)}
                onChange={() => toggleTime(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {f.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${controlBase} resize-y ${borderFor(errors.message)}`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jade px-7 py-3.5 text-base font-medium text-white transition duration-150 ease-out hover:bg-jade-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? f.submitSending : f.submitIdle}
      </button>
    </form>
  );
}
