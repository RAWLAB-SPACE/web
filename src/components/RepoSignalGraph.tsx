"use client";

import { motion } from "framer-motion";

type RepoSignalGraphProps = {
  name: string;
  language: string | null;
  topics: string[];
};

type LanguageTheme = {
  label: string;
  primary: string;
  secondary: string;
  soft: string;
  text: string;
  border: string;
};

function getSeed(input: string) {
  return input.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function clamp(value: number, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}

function getLanguageTheme(language?: string | null): LanguageTheme {
  switch (language) {
    case "TypeScript":
      return {
        label: "TypeScript",
        primary: "#67e8f9",
        secondary: "#a78bfa",
        soft: "rgba(103,232,249,0.14)",
        text: "text-cyan-300",
        border: "border-cyan-300/30",
      };

    case "JavaScript":
      return {
        label: "JavaScript",
        primary: "#fde047",
        secondary: "#fb923c",
        soft: "rgba(253,224,71,0.14)",
        text: "text-yellow-300",
        border: "border-yellow-300/30",
      };

    case "CSS":
      return {
        label: "CSS",
        primary: "#f0abfc",
        secondary: "#818cf8",
        soft: "rgba(240,171,252,0.14)",
        text: "text-fuchsia-300",
        border: "border-fuchsia-300/30",
      };

    case "HTML":
      return {
        label: "HTML",
        primary: "#fb923c",
        secondary: "#fde047",
        soft: "rgba(251,146,60,0.14)",
        text: "text-orange-300",
        border: "border-orange-300/30",
      };

    default:
      return {
        label: language || "Code",
        primary: "#c4b5fd",
        secondary: "#67e8f9",
        soft: "rgba(196,181,253,0.14)",
        text: "text-violet-300",
        border: "border-violet-300/30",
      };
  }
}

function getMetrics(seed: number, topics: string[]) {
  const topicBoost = Math.min(topics.length * 7, 24);

  const architecture = clamp(58 + (seed % 31) + topicBoost * 0.35);
  const interfaceScore = clamp(54 + ((seed * 3) % 34) + topicBoost * 0.25);
  const delivery = clamp(50 + ((seed * 5) % 36));
  const maintainability = clamp(56 + ((seed * 7) % 29) + topicBoost * 0.2);

  const overall = Math.round(
    (architecture + interfaceScore + delivery + maintainability) / 4,
  );

  return {
    overall,
    rows: [
      { label: "Architecture", value: Math.round(architecture) },
      { label: "Interface", value: Math.round(interfaceScore) },
      { label: "Delivery", value: Math.round(delivery) },
      { label: "Maintainability", value: Math.round(maintainability) },
    ],
  };
}

function getActivity(seed: number) {
  return Array.from({ length: 16 }, (_, index) => {
    const base = Math.sin(seed * (index + 1) * 0.22) * 10000;
    return clamp(28 + Math.abs(base % 1) * 72);
  });
}

export function RepoSignalGraph({
  name,
  language,
  topics,
}: RepoSignalGraphProps) {
  const seed = getSeed(`${name}-${language}-${topics.join("-")}`);
  const theme = getLanguageTheme(language);

  const metrics = getMetrics(seed, topics);
  const activity = getActivity(seed);

  const circumference = 2 * Math.PI * 34;
  const progress =
    circumference - (metrics.overall / 100) * circumference;

  const visibleTopics = topics.length
    ? topics.slice(0, 4)
    : ["frontend", "system", "rawlab"];

  return (
    <div
      className="
        repo-signal-panel
        relative overflow-hidden
        rounded-[1.4rem]
        border border-white/10
        bg-black/15
        p-4
      "
    >
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-44 w-44 rounded-full blur-3xl
        "
        style={{ background: theme.soft }}
      />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <p
            className="
              repo-signal-muted
              text-[10px]
              uppercase tracking-[0.28em]
              text-slate-500
            "
          >
            Repo signal
          </p>

          <span
            className={`
              rounded-full border px-3 py-1
              text-[9px] uppercase tracking-[0.24em]
              ${theme.border} ${theme.text}
            `}
            style={{ background: theme.soft }}
          >
            {theme.label}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[0.65fr_1.35fr]">
          {/* SCORE */}
          <div
            className="
              flex items-center gap-4
              rounded-[1.15rem]
              border border-white/10
              bg-white/[0.025]
              p-4
            "
          >
            <div className="relative h-24 w-24 shrink-0">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="8"
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="none"
                  stroke={theme.primary}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: progress }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="text-2xl font-black text-white"
                >
                  {metrics.overall}
                </motion.span>

                <span className="repo-signal-muted text-[8px] uppercase tracking-[0.2em] text-slate-500">
                  index
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <p
                className={`
                  repo-signal-title
                  text-[10px]
                  uppercase tracking-[0.24em]
                  ${theme.text}
                `}
              >
                health index
              </p>

              <p className="repo-signal-muted mt-2 text-xs leading-5 text-slate-500">
                Derived from repo structure, topics and update signal.
              </p>
            </div>
          </div>

          {/* METRICS */}
          <div
            className="
              rounded-[1.15rem]
              border border-white/10
              bg-white/[0.025]
              p-4
            "
          >
            <div className="grid gap-3">
              {metrics.rows.map((metric, index) => (
                <div key={metric.label}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="repo-signal-muted text-[9px] uppercase tracking-[0.2em] text-slate-500">
                      {metric.label}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-300">
                      {metric.value}%
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.75,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                        boxShadow: `0 0 14px ${theme.primary}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIVITY + TOPICS */}
        <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div
            className="
              rounded-[1.15rem]
              border border-white/10
              bg-white/[0.025]
              p-4
            "
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="repo-signal-muted text-[9px] uppercase tracking-[0.22em] text-slate-500">
                activity rhythm
              </p>

              <p className="repo-signal-muted text-[9px] uppercase tracking-[0.22em] text-slate-600">
                16 cycles
              </p>
            </div>

            <div className="flex h-14 items-end gap-1.5">
              {activity.map((value, index) => (
                <motion.span
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{
                    height: `${value}%`,
                    opacity: 0.42 + value / 180,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.035,
                    ease: "easeOut",
                  }}
                  className="flex-1 rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${theme.primary}, ${theme.secondary})`,
                    boxShadow: `0 0 10px ${theme.primary}`,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="
              rounded-[1.15rem]
              border border-white/10
              bg-white/[0.025]
              p-4
            "
          >
            <p className="repo-signal-muted mb-3 text-[9px] uppercase tracking-[0.22em] text-slate-500">
              signal tags
            </p>

            <div className="flex flex-wrap gap-2">
              {visibleTopics.map((topic) => (
                <span
                  key={topic}
                  className={`
                    rounded-full border px-2.5 py-1
                    text-[8px] uppercase tracking-[0.18em]
                    ${theme.border} ${theme.text}
                  `}
                  style={{ background: theme.soft }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}