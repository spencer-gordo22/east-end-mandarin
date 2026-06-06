import { Hero } from "@/components/Hero";
import { Background } from "@/components/Background";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Background />
      <Services />
      <Location />
      <Contact />
    </>
  );
}
