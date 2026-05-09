type SectionAtmosphereProps = {
  variant?: "violet" | "cyan" | "magenta" | "emerald" | "neutral";
  position?: "left" | "center" | "right";
};

const variants = {
  violet: "rgba(139,92,246,0.16)",
  cyan: "rgba(56,189,248,0.14)",
  magenta: "rgba(217,70,239,0.16)",
  emerald: "rgba(16,185,129,0.14)",
  neutral: "rgba(255,255,255,0.08)",
};

const positions = {
  left: "left-[-12rem] top-[20%]",
  center: "left-1/2 top-[22%] -translate-x-1/2",
  right: "right-[-12rem] top-[18%]",
};

export function SectionAtmosphere({
  variant = "violet",
  position = "center",
}: SectionAtmosphereProps) {
  return (
    <div
      className={`
        pointer-events-none absolute
        h-[28rem] w-[28rem]
        rounded-full blur-[120px]
        ${positions[position]}
      `}
      style={{
        background: variants[variant],
      }}
    />
  );
}