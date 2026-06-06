import { ImageResponse } from "next/og";
import { content } from "@/content";

// Placeholder social-share image, generated at build time with next/og.
// Editorial wordmark direction. Swap for custom artwork by replacing this
// file with an opengraph-image.png.
export const alt = content.meta.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ed",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Mark: hairline rule + circle + jade dot, echoing the logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 44 }}>
          <div style={{ width: 120, height: 1, background: "#2a2a28", opacity: 0.5 }} />
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 9999,
              border: "1px solid #2a2a28",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#2e6b52" }} />
          </div>
          <div style={{ width: 120, height: 1, background: "#2a2a28", opacity: 0.5 }} />
        </div>

        <div style={{ display: "flex", fontSize: 58, letterSpacing: 12, color: "#2a2a28", fontWeight: 500 }}>
          EAST END MANDARIN
        </div>
        <div style={{ display: "flex", fontSize: 21, letterSpacing: 10, color: "#2e6b52", fontWeight: 600, marginTop: 22 }}>
          MANDARIN TUTORING
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#615e58", marginTop: 46 }}>
          Mandarin lessons kids and teens enjoy
        </div>
      </div>
    ),
    { ...size },
  );
}
