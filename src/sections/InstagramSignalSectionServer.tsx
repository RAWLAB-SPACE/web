import { getInstagramFeed } from "@/lib/instagram";
import { InstagramSignalSection } from "@/sections/InstagramSignalSection";

export async function InstagramSignalSectionServer() {
  const { profile, fragments, stories } = await getInstagramFeed();

  return (
    <InstagramSignalSection
      profile={profile}
      fragments={fragments}
      stories={stories}
    />
  );
}