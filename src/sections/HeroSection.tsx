"use client";

import { motion } from "framer-motion";
import { InteractiveCollage } from "@/components/InteractiveCollage";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t } = useLanguage();

  const [theme, setTheme] = useState<"void" | "light" | "focus">(() => {
    if (typeof document === "undefined") {
      return "void";
    }

    const current = document.documentElement.dataset.theme;

    if (current === "focus") return "focus";
    if (current === "light") return "light";

    return "void";
  });

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleThemeChange(event: Event) {
      const customEvent = event as CustomEvent<
        "void" | "light" | "focus"
      >;

      setTheme(customEvent.detail);
    }

    window.addEventListener(
      "rawlab-theme-change",
      handleThemeChange,
    );

    return () => {
      window.removeEventListener(
        "rawlab-theme-change",
        handleThemeChange,
      );
    };
  }, []);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      setMousePosition({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isFocus = theme === "focus";
  const isLight = theme === "light";

  const solarParticles = [
  { id: 0, size: 6, top: 18, left: 24, duration: 12, delay: 0.2 },
  { id: 1, size: 9, top: 32, left: 68, duration: 16, delay: 1.1 },
  { id: 2, size: 5, top: 58, left: 18, duration: 14, delay: 0.6 },
  { id: 3, size: 11, top: 72, left: 76, duration: 18, delay: 1.8 },
  { id: 4, size: 7, top: 42, left: 44, duration: 13, delay: 0.9 },
  { id: 5, size: 4, top: 24, left: 82, duration: 20, delay: 2.4 },
  { id: 6, size: 8, top: 84, left: 38, duration: 15, delay: 1.5 },
  { id: 7, size: 5, top: 12, left: 52, duration: 17, delay: 0.4 },
  { id: 8, size: 10, top: 66, left: 58, duration: 19, delay: 2.1 },
  { id: 9, size: 6, top: 48, left: 86, duration: 14, delay: 1.2 },
  { id: 10, size: 4, top: 78, left: 12, duration: 21, delay: 2.8 },
  { id: 11, size: 9, top: 36, left: 8, duration: 16, delay: 0.7 },
  { id: 12, size: 5, top: 88, left: 64, duration: 18, delay: 1.9 },
  { id: 13, size: 7, top: 8, left: 74, duration: 13, delay: 0.3 },
  { id: 14, size: 6, top: 54, left: 32, duration: 15, delay: 1.6 },
  { id: 15, size: 10, top: 28, left: 36, duration: 20, delay: 2.6 },
];

  /* =========================================================
     FOCUS MODE
     ========================================================= */

  if (isFocus) {
    return (
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
      >
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,_rgba(0,255,157,0.12),_transparent_45%)]
          "
        />

        <div
          className="
            absolute inset-0 opacity-10
            bg-[linear-gradient(to_right,#00ff9d15_1px,transparent_1px),
            linear-gradient(to_bottom,#00ff9d15_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00ff9d]" />

              <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/70">
                RAWLAB_SYSTEM
              </span>
            </div>

            <h1
              className="
                font-mono text-6xl font-black uppercase
                tracking-[0.1em]
                text-[#00ff9d]
                md:text-8xl xl:text-9xl
              "
            >
              RAWLAB_
            </h1>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div
                className="
                  rounded-3xl border border-[#00ff9d]/20
                  bg-black/30 p-8
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    mb-4 font-mono text-xs uppercase
                    tracking-[0.3em]
                    text-[#00ff9d]
                  "
                >
                  Status
                </div>

                <div className="space-y-3 font-mono text-sm text-white">
                  <div>SYSTEM: ONLINE</div>
                  <div>MODE: FOCUS</div>
                  <div>STACK: ACTIVE</div>
                  <div>NETWORK: STABLE</div>
                  <div>LOCATION: SANTIAGO_CL</div>
                </div>
              </div>

              <div
                className="
                  rounded-3xl border border-white/10
                  bg-black/30 p-8
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    mb-4 font-mono text-xs uppercase
                    tracking-[0.3em]
                    text-[#00ff9d]
                  "
                >
                  Signal
                </div>

                <p
                  className="
                    max-w-xl font-mono text-sm
                    leading-8 text-white
                  "
                >
                  Frontend systems, motion architecture and digital
                  experiences engineered between creativity and precision.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects-preview"
                    className="
                      rounded-full border border-[#00ff9d]/30
                      px-6 py-3
                      font-mono text-xs uppercase
                      tracking-[0.25em]
                      text-[#00ff9d]
                      transition
                      hover:border-[#00ff9d]
                      hover:bg-[#00ff9d]/10
                    "
                  >
                    Explore
                  </a>

                  <a
                    href="https://github.com/RAWLAB-SPACE"
                    target="_blank"
                    className="focus-github-cta rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] transition"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div
              className="
                mt-12 flex items-center gap-3
                font-mono text-sm text-[#00ff9d]
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff9d]" />

              <span>
                awaiting_input
                <span className="animate-pulse">_</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* =========================================================
     LIGHT MODE — SOLAR OBSERVATORY
     ========================================================= */

  if (isLight) {
    return (
      <section
        id="hero"
        className="
          relative flex min-h-screen items-center
          overflow-hidden px-6 pt-32
        "
      >
        {/* ATMOSPHERE */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(255,180,0,0.28),transparent_30%)]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(to_right,#ff7a0015_1px,transparent_1px),
            linear-gradient(to_bottom,#ff7a0015_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />

        {/* moving flare */}
        <motion.div
          animate={{
            x: ["-20%", "120%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none absolute top-0
            h-full w-[30rem]
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            blur-3xl
          "
        />

        <div
          className="
            relative z-10 mx-auto
            grid max-w-7xl gap-20
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#ff7a00] shadow-[0_0_16px_rgba(255,120,0,0.8)]" />

              <span
                className="
                  text-xs uppercase tracking-[0.35em]
                  text-[#ff7a00]
                "
              >
                CALIFORNIA_SIGNAL
              </span>
            </div>

            <h1
              className="
                text-6xl font-black tracking-[-0.08em]
                text-[#ff5a00]
                md:text-8xl xl:text-[9rem]
              "
            >
              RAWLAB_
            </h1>

            <div className="mt-10 space-y-3">
              <p
                className="
                  text-sm uppercase tracking-[0.35em]
                  text-[#ff7a00]
                "
              >
                SOLAR OBSERVATORY
              </p>

              <p
                className="
                  max-w-xl text-2xl leading-[1.3]
                  text-[#315b87]
                  md:text-4xl
                "
              >
                Designing systems
                <br />
                inside creative gravity.
              </p>
            </div>

            <div
              className="
                mt-10 flex flex-wrap gap-3
              "
            >
              {[
                "MOTION",
                "SIGNAL",
                "INTERFACE",
                "ATMOSPHERE",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-full border border-orange-200/40
                    bg-white/30 px-4 py-2
                    text-[10px] uppercase tracking-[0.3em]
                    text-[#ff7a00]
                    backdrop-blur-xl
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#projects-preview"
                className="
                  rounded-full border border-orange-300/40
                  bg-white/40
                  px-6 py-3
                  text-sm uppercase tracking-[0.25em]
                  text-[#ff5a00]
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-1
                  hover:border-orange-400
                  hover:bg-orange-100/60
                  hover:shadow-[0_0_32px_rgba(255,120,0,0.24)]
                "
              >
                Explore
              </a>

              <a
                href="https://github.com/RAWLAB-SPACE"
                target="_blank"
                className="
                  rounded-full
                  bg-[#ff5a00]
                  px-6 py-3
                  text-sm uppercase tracking-[0.25em]
                  text-white
                  shadow-[0_0_40px_rgba(255,120,0,0.28)]
                  transition
                  hover:-translate-y-1
                  hover:bg-[#ff7a00]
                "
              >
                Github
              </a>
            </div>

            <div className="mt-14 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#ffb000]" />

                <p
                  className="
                    text-xs uppercase tracking-[0.3em]
                    text-[#315b87]
                  "
                >
                  SOLAR_ENVIRONMENT_ACTIVE
                </p>
              </div>

              <div
                className="
                  text-[11px] uppercase tracking-[0.25em]
                  text-[#315b87]/70
                "
              >
                LAT -33.4489 · LON -70.6693 · SANTIAGO_CHILE
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[42rem]"
          >
            {/* glow */}
            <motion.div
              animate={{
                x: mousePosition.x * 40 - 20,
                y: mousePosition.y * 40 - 20,
              }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 18,
              }}
              className="
                absolute left-1/2 top-1/2
                h-[30rem] w-[30rem]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-orange-400/20
                blur-[120px]
              "
            />

            {/* orbit rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute left-1/2 top-1/2
                h-[24rem] w-[24rem]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-orange-300/20
              "
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute left-1/2 top-1/2
                h-[32rem] w-[32rem]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-orange-200/10
              "
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 180,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute left-1/2 top-1/2
                h-[38rem] w-[38rem]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-white/10
              "
            />

            {/* particles */}
            {solarParticles.map((particle) => (
              <motion.div
                key={particle.id}
                animate={{
                  y: [0, -24, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  width: particle.size,
                  height: particle.size,
                }}
                className="
                  absolute rounded-full
                  bg-orange-200
                  blur-[1px]
                "
              />
            ))}

            {/* solar core */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute left-1/2 top-1/2
                h-72 w-72
                -translate-x-1/2 -translate-y-1/2
                rounded-full
              "
            >
              {/* outer */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[radial-gradient(circle,#fff7c2_0%,#ffb000_32%,#ff5a00_70%,transparent_100%)]
                  blur-[2px]
                "
              />

              {/* inner */}
              <div
                className="
                  absolute inset-6 rounded-full
                  bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,210,120,0.85)_30%,rgba(255,140,0,0.45)_100%)]
                "
              />

              {/* ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-[-2rem]
                  rounded-full border border-orange-100/20
                "
              />
            </motion.div>

            {/* floating cards */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute right-10 top-12
                rounded-[2rem]
                border border-orange-200/30
                bg-white/30
                px-6 py-5
                backdrop-blur-2xl
              "
            >
              <p
                className="
                  text-[10px] uppercase tracking-[0.3em]
                  text-[#ff7a00]
                "
              >
                CREATIVE RADIATION
              </p>

              <p className="mt-2 text-3xl font-black text-[#ff5a00]">
                98%
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="
                absolute bottom-20 left-6
                rounded-[2rem]
                border border-orange-200/30
                bg-white/30
                px-6 py-5
                backdrop-blur-2xl
              "
            >
              <p
                className="
                  text-[10px] uppercase tracking-[0.3em]
                  text-[#ff7a00]
                "
              >
                SOLAR FLOW
              </p>

              <p className="mt-2 text-sm text-[#315b87]">
                ACTIVE
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute bottom-10 right-20
                rounded-[2rem]
                border border-orange-200/30
                bg-white/30
                px-6 py-5
                backdrop-blur-2xl
              "
            >
              <p
                className="
                  text-[10px] uppercase tracking-[0.3em]
                  text-[#ff7a00]
                "
              >
                SIGNAL DENSITY
              </p>

              <p className="mt-2 text-sm text-[#315b87]">
                HIGH
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* =========================================================
     VOID MODE
     ========================================================= */

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_45%)]
        "
      />

      <div
        className="
          theme-grid
          absolute inset-0 opacity-20
          bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
          linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 text-sm tracking-[0.5em] text-violet-300">
            {t.hero.eyebrow}
          </p>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl xl:text-9xl">
            {t.hero.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects-preview"
              className="
                rounded-full border border-slate-500
                px-6 py-3 text-sm uppercase tracking-widest
                text-slate-100 transition
                hover:border-violet-300
                hover:text-violet-300
              "
            >
              {t.hero.explore}
            </a>

            <a
              href="https://github.com/RAWLAB-SPACE"
              target="_blank"
              className="
                rounded-full bg-slate-100
                px-6 py-3 text-sm uppercase tracking-widest
                text-slate-950 transition
                hover:bg-violet-300
              "
            >
              {t.hero.github}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <InteractiveCollage />
        </motion.div>
      </div>
    </section>
  );
}