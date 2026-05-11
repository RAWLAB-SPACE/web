import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#050816",
          color: "#e2e8f0",
          display: "flex",
          padding: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 35%, rgba(139,92,246,0.35), transparent 35%), radial-gradient(circle at 20% 80%, rgba(56,189,248,0.18), transparent 35%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.42em",
              color: "#c4b5fd",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Movement • Code • Design
          </div>

          <div
            style={{
              fontSize: 112,
              fontWeight: 950,
              letterSpacing: "-0.06em",
              lineHeight: 0.9,
            }}
          >
            RAWLAB_
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#cbd5e1",
            }}
          >
            A living digital archive where technology, movement, visual systems
            and human experience coexist.
          </div>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              gap: 16,
              color: "#94a3b8",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>Next.js</span>
            <span>•</span>
            <span>Motion Systems</span>
            <span>•</span>
            <span>Live APIs</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 74,
            bottom: 72,
            width: 310,
            height: 390,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
            boxShadow: "0 40px 120px rgba(0,0,0,0.45)",
            transform: "rotate(7deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 195,
            top: 94,
            width: 230,
            height: 300,
            borderRadius: 32,
            border: "1px solid rgba(196,181,253,0.28)",
            background:
              "linear-gradient(145deg, rgba(139,92,246,0.22), rgba(255,255,255,0.03))",
            boxShadow: "0 30px 100px rgba(139,92,246,0.22)",
            transform: "rotate(-10deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 80,
            top: 74,
            fontSize: 16,
            color: "#c4b5fd",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          Signal archive
        </div>
      </div>
    ),
    size
  );
}