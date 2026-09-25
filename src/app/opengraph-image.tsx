import { ImageResponse } from "next/og";

export const alt = "Life with AI — get comfortable with AI in ordinary life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f5f1e8",
          color: "#1b2433",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 36 36">
            <rect x="2" y="3" width="32" height="25" rx="8" fill="#c8421f" />
            <path d="M9 26 L9 34 L18 27 Z" fill="#c8421f" />
            <path
              d="M10 12.5 H26 M10 19 H20"
              stroke="#fffdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ fontSize: 40, fontFamily: "Georgia, serif" }}>
            Life with AI
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 80,
            lineHeight: 1.05,
            fontFamily: "Georgia, serif",
            maxWidth: 980,
          }}
        >
          <span>Get comfortable with AI in&nbsp;</span>
          <span
            style={{
              background:
                "linear-gradient(transparent 60%, #f7dd72 60%, #f7dd72 92%, transparent 92%)",
            }}
          >
            ordinary life
          </span>
          <span>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontFamily: "sans-serif",
            color: "#4a5263",
          }}
        >
          A calm starter course · £39 · Free lessons to read first
        </div>
      </div>
    ),
    { ...size },
  );
}
