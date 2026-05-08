export function SignalNoise() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0 z-[2]
        opacity-[0.035]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
          radial-gradient(circle at 80% 40%, white 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, white 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    />
  );
}