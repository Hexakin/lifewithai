import { ImageResponse } from "next/og";

export const alt = "Life with AI — a calm starter course for everyday life";
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
          background: "#f3eee4",
          color: "#1c1915",
        }}
      >
        <div style={{ width: 28, height: "100%", background: "#8c3429" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8c3429",
              fontFamily: "Georgia, serif",
            }}
          >
            lifewithai.co.uk
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 84,
                lineHeight: 1.02,
                fontFamily: "Georgia, serif",
              }}
            >
              Life with AI
            </div>
            <div
              style={{
                fontSize: 36,
                marginTop: 28,
                color: "#4e483f",
                fontFamily: "sans-serif",
              }}
            >
              A calm starter course for everyday life
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              fontFamily: "sans-serif",
              color: "#1c1915",
            }}
          >
            £39 · Free lessons to read first
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
