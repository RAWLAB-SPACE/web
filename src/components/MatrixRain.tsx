"use client";

const matrixChars =
  "010101101001011010010101001101011001010011010101001101";

const columns = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index / 42) * 100}%`,
  delay: `${(index % 9) * -0.7}s`,
  duration: `${8 + (index % 7)}s`,
  text: matrixChars.repeat(8),
}));

export function MatrixRain() {
  return (
    <div className="matrix-rain" aria-hidden="true">
      {columns.map((column) => (
        <span
          key={column.id}
          className="matrix-column"
          style={{
            left: column.left,
            animationDelay: column.delay,
            animationDuration: column.duration,
          }}
        >
          {column.text}
        </span>
      ))}
    </div>
  );
}