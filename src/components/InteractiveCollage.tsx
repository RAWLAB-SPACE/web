"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { collageItems } from "@/data/collageItems";

const sizeClasses = {
  large: "h-64 md:row-span-2 md:h-full",
  medium: "h-48",
  small: "h-36",
};

export function InteractiveCollage() {
  return (
    <div className="relative grid auto-rows-[10rem] grid-cols-2 gap-4 md:grid-cols-3">
      {collageItems.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{
            opacity: 0,
            y: 24,
            rotate: index % 2 ? 1.5 : -1.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: index % 2 ? 1 : -1,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
            rotate: 0,
          }}
          className={`
            group relative overflow-hidden rounded-[2rem]
            border border-white/10
            shadow-2xl shadow-black/20
            transition
            hover:border-violet-300/50
            ${sizeClasses[item.size]}
          `}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            draggable={false}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
            className="
                select-none
                object-cover
                transition duration-700
                group-hover:scale-110
              "
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-violet-500/10" />

          <div className="relative z-10 flex h-full flex-col justify-between p-5">
            <span className="text-[10px] uppercase tracking-[0.35em] text-violet-200">
              {item.type}
            </span>

            <div>
              <h3 className="max-w-[10rem] text-xl font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-300 opacity-0 transition group-hover:opacity-100">
                Open fragment
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
