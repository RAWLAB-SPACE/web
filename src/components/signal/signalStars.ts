export type ModalStar = {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  driftX: string;
  driftY: string;
};

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const modalStars: ModalStar[] = Array.from({ length: 70 }, (_, index) => {
  const seed = index + 1;

  return {
    id: index,
    width: `${pseudoRandom(seed * 1.2) * 2 + 1}px`,
    height: `${pseudoRandom(seed * 1.7) * 2 + 1}px`,
    top: `${pseudoRandom(seed * 2.3) * 100}%`,
    left: `${pseudoRandom(seed * 3.1) * 100}%`,
    animationDuration: `${pseudoRandom(seed * 4.4) * 6 + 4}s`,
    animationDelay: `${pseudoRandom(seed * 5.5) * 5}s`,
    driftX: `${pseudoRandom(seed * 6.6) * 20 - 10}px`,
    driftY: `${pseudoRandom(seed * 7.7) * 20 - 10}px`,
  };
});