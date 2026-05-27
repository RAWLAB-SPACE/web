"use client";

import { motion } from "framer-motion";
import { InteractiveCollage } from "@/components/InteractiveCollage";
import { RawlabLogo } from "@/components/RawlabLogo";
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

            {/* LOGO */}
            <div className="scale-[0.7] origin-left md:scale-100">
              <RawlabLogo />
            </div>

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
                    href="https://github.com/RAWLABdev"
                    target="_blank"
                    className="focus-github-cta rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] transition"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* =========================================================
     LIGHT MODE
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

            {/* LOGO */}
            <div className="scale-[0.7] origin-left md:scale-100">
              <RawlabLogo />
            </div>

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
                "
              >
                Explore
              </a>

              <a
                href="https://github.com/RAWLABdev"
                target="_blank"
                className="
                  rounded-full
                  bg-[#ff5a00]
                  px-6 py-3
                  text-sm uppercase tracking-[0.25em]
                  text-white
                  transition
                  hover:-translate-y-1
                "
              >
                Github
              </a>
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

            {/* collage */}
            <div className="relative z-10">
              <InteractiveCollage />
            </div>
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

          {/* LOGO */}
          <div className="scale-[0.72] origin-left md:scale-100">
            <RawlabLogo />
          </div>

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
              href="https://github.com/RAWLABdev"
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