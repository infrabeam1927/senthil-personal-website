import { ImageResponse } from "next/og";
import { profile } from "@/lib/resume-data";

export const alt =
  "K. Senthilkumar — Technical Manager, Welding & Quality Specialist, Oil & Gas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0d12",
          backgroundImage:
            "linear-gradient(#1e2530 1px, transparent 1px), linear-gradient(90deg, #1e2530 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 420,
            height: 420,
            borderRadius: "50%",
            backgroundColor: "rgba(245, 147, 21, 0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#f59315",
            }}
          />
          <span
            style={{
              color: "#f59315",
              fontSize: 26,
              letterSpacing: 4,
              fontWeight: 600,
            }}
          >
            TECHNICAL MANAGER · OIL &amp; GAS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#f8fafc",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </span>
          <span
            style={{
              marginTop: 20,
              color: "#9fadbd",
              fontSize: 34,
              fontWeight: 500,
            }}
          >
            {profile.tagline}
          </span>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f59315", fontSize: 44, fontWeight: 700 }}>
              25+
            </span>
            <span style={{ color: "#57697d", fontSize: 22 }}>
              Years Experience
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f59315", fontSize: 44, fontWeight: 700 }}>
              15
            </span>
            <span style={{ color: "#57697d", fontSize: 22 }}>
              Years International
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f59315", fontSize: 44, fontWeight: 700 }}>
              API · ASME · AWS
            </span>
            <span style={{ color: "#57697d", fontSize: 22 }}>
              Codes &amp; Standards
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
