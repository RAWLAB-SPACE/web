"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { InstagramFragment } from "@/lib/instagram";

interface SignalStoriesProps {
  stories: InstagramFragment[];
  profileUsername?: string;
  onOpenStory: (story: InstagramFragment) => void;
}

export function SignalStories({
  stories,
  profileUsername,
  onOpenStory,
}: SignalStoriesProps) {
  return (
    <div className="mb-10 overflow-x-auto pb-2">
      <div className="flex w-full min-w-0 items-center gap-3 overflow-x-auto">
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <motion.button
              key={story.id}
              type="button"
              onClick={() => onOpenStory(story)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-70 blur-md transition group-hover:opacity-100" />

                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/10 p-[3px] backdrop-blur-xl">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-violet-300">
                  Story
                </p>

                <p className="max-w-[5rem] truncate text-xs text-slate-400">
                  @{profileUsername}
                </p>
              </div>
            </motion.button>
          ))
        ) : (
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <div className="relative h-8 w-8 rounded-full border border-dashed border-violet-300/40">
              <div className="absolute inset-[5px] rounded-full bg-violet-300/20" />

              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,1)]" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-[0.3em] text-violet-300">
                Stories
              </span>

              <span className="mt-1 text-[11px] text-slate-400">
                No live stories
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}