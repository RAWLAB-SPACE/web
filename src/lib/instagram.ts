import { instagramFragments } from "@/data/instagramFragments";

export type InstagramFragment = {
  type: string;
  title: string;
  image: string;
  permalink?: string;
  source?: "mock" | "instagram";
};

type InstagramMediaResponse = {
  data?: {
    id: string;
    caption?: string;
    media_url?: string;
    permalink?: string;
    media_type?: string;
  }[];
};

export async function getInstagramFragments(): Promise<InstagramFragment[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return instagramFragments.map((item) => ({
      ...item,
      source: "mock",
    }));
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Instagram API request failed");
    }

    const result = (await response.json()) as InstagramMediaResponse;

    if (!result.data?.length) {
      return instagramFragments.map((item) => ({
        ...item,
        source: "mock",
      }));
    }

    return result.data
      .filter((item) => item.media_url)
      .slice(0, 4)
      .map((item) => ({
        type: item.media_type?.toLowerCase() || "instagram",
        title: item.caption?.slice(0, 60) || "Instagram fragment",
        image: item.media_url!,
        permalink: item.permalink,
        source: "instagram",
      }));
  } catch {
    return instagramFragments.map((item) => ({
      ...item,
      source: "mock",
    }));
  }
}