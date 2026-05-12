"use client";

import type { InstagramFragment, InstagramProfile } from "@/lib/instagram";
import { useLanguage } from "@/context/LanguageContext";
import { SignalStories } from "@/components/signal/SignalStories";
import { SignalProfile } from "@/components/signal/SignalProfile";
import { SignalModal } from "@/components/signal/SignalModal";
import { SignalDeck } from "@/components/signal/SignalDeck";
import { modalStars } from "@/components/signal/signalStars";
import { useSignalDeck } from "@/hooks/useSignalDeck";

type InstagramSignalSectionProps = {
  profile: InstagramProfile | null;
  fragments: InstagramFragment[];
  stories: InstagramFragment[];
};

export function InstagramSignalSection({
  profile,
  fragments,
  stories,
}: InstagramSignalSectionProps) {
  const { t } = useLanguage();

  const {
    activeIndex,
    activeItem,
    activeFragment,
    activeChildImage,
    visibleStack,
    setActiveIndex,
    setActiveChildImage,
    openFragment,
    closeFragment,
  } = useSignalDeck(fragments);

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
          onOpenStory={openFragment}
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
            onOpenFragment={openFragment}
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
          onClose={closeFragment}
          onSelectChildImage={setActiveChildImage}
        />
      )}
    </section>
  );
}