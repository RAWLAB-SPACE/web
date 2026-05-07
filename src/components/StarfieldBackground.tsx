"use client";

const stars = Array.from({ length: 90 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() > 0.82 ? 2 : 1,
  delay: `${Math.random() * 4}s`,
  opacity: Math.random() * 0.6 + 0.2,
}));

export function StarfieldBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            background: "var(--star-color)",
            boxShadow: "0 0 12px var(--star-glow)",
          }}
        />
      ))}
    </div>
  );
}