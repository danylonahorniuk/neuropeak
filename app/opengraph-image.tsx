import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NeuroPeak — добавка для фокусу та продуктивності";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #e8f7ee 0%, #ffffff 45%, #ecfdf5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(60,163,102,0.08)",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(60,163,102,0.06)",
        }} />

        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center",
          background: "#f0faf4", border: "1px solid #b8e6c9",
          borderRadius: 100, padding: "8px 20px",
          fontSize: 18, fontWeight: 600, color: "#2a8752",
          letterSpacing: "0.12em", textTransform: "uppercase",
          marginBottom: 32,
        }}>
          Біо-оптимізоване фокусування
        </div>

        {/* Title */}
        <div style={{
          fontSize: 80, fontWeight: 800, color: "#111827",
          lineHeight: 1.05, textAlign: "center", marginBottom: 24,
          letterSpacing: "-0.02em",
        }}>
          NeuroPeak
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 32, fontWeight: 600, color: "#3ca366",
          marginBottom: 20, textAlign: "center",
        }}>
          Фокус. Ясність. Продуктивність.
        </div>

        {/* Description */}
        <div style={{
          fontSize: 22, color: "#6b7280", maxWidth: 680,
          textAlign: "center", lineHeight: 1.5,
        }}>
          Преміальна добавка для підтримки концентрації
          та ясності мислення протягом дня
        </div>

        {/* Bottom domain */}
        <div style={{
          position: "absolute", bottom: 40,
          fontSize: 18, color: "#9ca3af", fontWeight: 500,
        }}>
          neuropeak-gilt.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
