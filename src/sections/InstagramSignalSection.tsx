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
    setIsPaused,
  } = useSignalDeck(fragments);

  if (!activeItem) return null;

  return (
    <section
      id="instagram"
      className="relative w-full max-w-full overflow-x-clip px-4 py-32 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-32 h-[34rem] w-[34rem] translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-[60px] md:blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden">
        <div className="mb-10 grid w-full min-w-0 max-w-full gap-5 md:mb-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
          <div className="min-w-0">
            <p className="break-words text-sm uppercase tracking-[0.32em] text-violet-300 sm:tracking-[0.4em]">
              {t.instagram.eyebrow}
            </p>

            <h2 className="mt-4 break-words text-3xl font-black tracking-tight sm:text-4xl md:mt-6 md:text-7xl">
              {t.instagram.title}
            </h2>
          </div>

          <p className="min-w-0 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            {t.instagram.description}
          </p>
        </div>

        <div className="w-full min-w-0 max-w-full overflow-hidden ">
          <SignalStories
            stories={stories}
            profileUsername={profile?.username}
            onOpenStory={openFragment}
          />
        </div>

        <div className="grid w-full min-w-0 max-w-full gap-6 overflow-hidden lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="min-w-0">
            <SignalProfile profile={profile} />
          </div>

          <div className="min-w-0">
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
              onPauseChange={setIsPaused}
            />
          </div>
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
