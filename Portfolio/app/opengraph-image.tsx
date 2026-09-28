import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Amol Kadam — Performance Marketer | SEO | Digital Marketing";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#111111",
          color: "#f7f7f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, fontWeight: 800, letterSpacing: -1 }}>
          <div style={{ width: 16, height: 16, background: "#e6203b", borderRadius: 999 }} />
          AMOL KADAM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05, maxWidth: 980 }}>
            Performance Marketer
          </div>
          <div style={{ fontSize: 28, color: "#b4b4b2", maxWidth: 760 }}>
            SEO · Digital Marketing · Pune, Maharashtra, India
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#e6203b" }}>
          <span>amolkadam.com</span>
          <span>Meta · Google · SEO · Tracking</span>
        </div>
      </div>
    ),
    size
  );
}
