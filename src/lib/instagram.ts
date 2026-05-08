import { instagramFragments } from "@/data/instagramFragments";

export type InstagramFragment = {
  type: string;
  title: string;
  image: string;
  permalink?: string;
  source?: "mock" | "instagram";
};

export async function getInstagramFragments(): Promise<InstagramFragment[]> {
  // TODO:
  // Replace mock data with Instagram / Meta API when access token is available.
  return instagramFragments.map((item) => ({
    ...item,
    source: "mock",
  }));
}