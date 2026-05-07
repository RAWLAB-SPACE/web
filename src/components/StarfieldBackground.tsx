import type { CSSProperties } from "react";

type Star = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  driftX: string;
  driftY: string;
  opacity: number;
};

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const stars: Star[] = Array.from({ length: 90 }, (_, index) => {
  const seed = index + 1;

  return {
    id: index,
    left: `${pseudoRandom(seed * 1.3) * 100}%`,
    top: `${pseudoRandom(seed * 2.1) * 100}%`,
    size: pseudoRandom(seed * 3.7) > 0.85 ? 2 : 1,
    duration: `${pseudoRandom(seed * 4.2) * 4 + 3}s`,
    delay: `${pseudoRandom(seed * 5.4) * 5}s`,
    driftX: `${pseudoRandom(seed * 6.8) * 16 - 8}px`,
    driftY: `${pseudoRandom(seed * 7.9) * 16 - 8}px`,
    opacity: pseudoRandom(seed * 8.5) * 0.45 + 0.25,
  };
});

export function StarfieldBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="raw-star absolute rounded-full"
          style={
            {
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: star.duration,
              animationDelay: star.delay,
              "--drift-x": star.driftX,
              "--drift-y": star.driftY,
            } as CSSProperties
          }
        />
      ))}

      <span className="raw-shooting-star absolute left-[-20%] top-[20%] h-px w-[35rem] rotate-[-18deg]" />
    </div>
  );
}