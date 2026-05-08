type RepoSignalGraphProps = {
  name: string;
  language: string | null;
  topics: string[];
};

function getSeed(input: string) {
  return input.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function getValues(seed: number) {
  return Array.from({ length: 14 }, (_, index) => {
    const value = Math.sin(seed * (index + 1)) * 10000;
    return Math.abs(value % 1);
  });
}

export function RepoSignalGraph({
  name,
  language,
  topics,
}: RepoSignalGraphProps) {
  const seed = getSeed(`${name}-${language}-${topics.join("-")}`);
  const values = getValues(seed);
  const variant = seed % 3;

  return (
    <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Repo signal graph
          </p>

          <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">
            {language || "Code"}
          </p>
        </div>

        {variant === 0 && (
          <div className="flex h-32 items-end gap-2">
            {values.map((value, index) => (
              <span
                key={index}
                className="repo-bar flex-1 rounded-full bg-violet-300/40"
                style={{
                  height: `${24 + value * 76}%`,
                  opacity: 0.35 + value * 0.65,
                  animationDelay: `${index * 0.12}s`,
                  animationDuration: `${3 + value * 3}s`,
                }}
              />
            ))}
          </div>
        )}

        {variant === 1 && (
          <div className="relative h-32">
            {values.map((value, index) => (
              <span
                key={index}
                className="repo-node absolute rounded-full border border-violet-300/30 bg-violet-300/10"
                style={{
                  width: `${18 + value * 52}px`,
                  height: `${18 + value * 52}px`,
                  left: `${(index / values.length) * 90}%`,
                  top: `${value * 65}%`,
                  opacity: 0.35 + value * 0.6,
                  animationDelay: `${index * 0.16}s`,
                  animationDuration: `${4 + value * 4}s`,
                }}
              />
            ))}
          </div>
        )}

        {variant === 2 && (
          <div className="grid h-32 grid-cols-7 gap-2">
            {values.map((value, index) => (
              <span
                key={index}
                className="repo-cell rounded-2xl border border-white/10 bg-white/[0.04]"
                style={{
                  opacity: 0.35 + value * 0.65,
                  transform: `scale(${0.7 + value * 0.4})`,
                  animationDelay: `${index * 0.09}s`,
                  animationDuration: `${3.5 + value * 3}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center gap-2">
          {values.slice(0, 8).map((value, index) => (
            <span
              key={index}
              className="repo-pulse-line h-1 flex-1 rounded-full bg-violet-300/30"
              style={{
                opacity: 0.25 + value * 0.75,
                animationDelay: `${index * 0.18}s`,
                animationDuration: `${2.8 + value * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}