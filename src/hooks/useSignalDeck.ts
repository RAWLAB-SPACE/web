"use client";

import { useEffect, useMemo, useState } from "react";
import type { InstagramFragment } from "@/lib/instagram";

export function useSignalDeck(fragments: InstagramFragment[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFragment, setActiveFragment] =
    useState<InstagramFragment | null>(null);
  const [activeChildImage, setActiveChildImage] = useState<string | null>(null);

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

  function openFragment(fragment: InstagramFragment) {
    setActiveFragment(fragment);
    setActiveChildImage(null);
  }

  function closeFragment() {
    setActiveFragment(null);
    setActiveChildImage(null);
  }

  return {
    activeIndex,
    activeItem,
    activeFragment,
    activeChildImage,
    visibleStack,
    setActiveIndex,
    setActiveChildImage,
    openFragment,
    closeFragment,
  };
}