"use client";

import { useEffect, useMemo, useState } from "react";
import type { InstagramFragment, InstagramProfile } from "@/lib/instagram";
import { useLanguage } from "@/context/LanguageContext";
import { SignalStories } from "@/components/signal/SignalStories";
import { SignalProfile } from "@/components/signal/SignalProfile";
import { SignalModal } from "@/components/signal/SignalModal";
import { SignalDeck } from "@/components/signal/SignalDeck";

type InstagramSignalSectionProps = {
  profile: InstagramProfile | null;
  fragments: InstagramFragment[];
  stories: InstagramFragment[];
};

type ModalStar = {
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

const modalStars: ModalStar[] = Array.from({ length: 70 }, (_, index) => {
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

export function InstagramSignalSection({
  profile,
  fragments,
  stories,
}: InstagramSignalSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFragment, setActiveFragment] =
    useState<InstagramFragment | null>(null);

  const [activeChildImage, setActiveChildImage] = useState<string | null>(null);

  const { t } = useLanguage();

  const activeItem = fragments[activeIndex] ?? fragments[0];

  const visibleStack = useMemo(() => {
    if (!fragments.length) return [];

    return Array.from(
      { length: Math.min(5, fragments.length) },
      (_, offset) => {
        const index = (activeIndex + offset) % fragments.length;

        return {
          item: fragments[index],
          index,
        };
      },
    );
  }, [activeIndex, fragments]);

  useEffect(() => {
    if (!fragments.length || activeFragment) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === fragments.length - 1 ? 0 : current + 1,
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, [fragments.length, activeFragment]);

  if (!activeItem) return null;

  return (
    <section id="instagram" className="relative overflow-hidden px-6 py-32">
      <div className="absolute right-[-12rem] top-32 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
              {t.instagram.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-7xl">
              {t.instagram.title}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {t.instagram.description}
          </p>
        </div>

        <SignalStories
          stories={stories}
          profileUsername={profile?.username}
          onOpenStory={(story) => {
            setActiveFragment(story);
            setActiveChildImage(null);
          }}
        />

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <SignalProfile profile={profile} />

          <SignalDeck
            fragments={fragments}
            activeIndex={activeIndex}
            activeItem={activeItem}
            visibleStack={visibleStack}
            liveLabel={t.instagram.live}
            signalLabel={t.instagram.signal}
            openLabel={t.instagram.open}
            onSelectIndex={setActiveIndex}
            onOpenFragment={(fragment) => {
              setActiveFragment(fragment);
              setActiveChildImage(null);
            }}
          />
        </div>
      </div>

      {activeFragment && (
        <SignalModal
          activeFragment={activeFragment}
          activeChildImage={activeChildImage}
          modalStars={modalStars}
          fragmentDescription={t.instagram.fragmentDescription}
          liveInstagramLabel={t.instagram.liveInstagram}
          curatedSignalLabel={t.instagram.curatedSignal}
          onClose={() => setActiveFragment(null)}
          onSelectChildImage={setActiveChildImage}
        />
      )}
    </section>
  );
}
