import { getInstagramFragments } from "@/lib/instagram";
import { InstagramSignalSection } from "@/sections/InstagramSignalSection";

export async function InstagramSignalSectionServer() {
  const fragments = await getInstagramFragments();

  return <InstagramSignalSection fragments={fragments} />;
}