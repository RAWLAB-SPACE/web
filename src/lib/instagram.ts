export type InstagramComment = {
  text?: string;
  username?: string;
  timestamp?: string;
};

export type InstagramChild = {
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
};

export type InstagramProfile = {
  id?: string;
  username?: string;
  account_type?: string;
  media_count?: number;
  followers_count?: number;
  follows_count?: number;
};

export type InstagramFragment = {
  id: string;
  type: string;
  title: string;
  image: string;
  permalink?: string;
  source?: "mock" | "instagram";
  timestamp?: string;

  likeCount?: number;
  commentsCount?: number;

  children?: InstagramChild[];
  comments?: InstagramComment[];
};

type InstagramApiItem = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;

  like_count?: number;
  comments_count?: number;

  children?: {
    data?: InstagramChild[];
  };

  comments?: {
    data?: InstagramComment[];
  };
};

type InstagramResponse = {
  connected?: boolean;
  source?: string;
  profile?: InstagramProfile;
  data?: InstagramApiItem[];
  stories?: InstagramApiItem[];
};

const MOCK_FRAGMENTS: InstagramFragment[] = [
  {
    id: "mock-1",
    type: "signal",
    title: "RAWLAB_signal_fragment",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    source: "mock",
  },
  {
    id: "mock-2",
    type: "mountain",
    title: "Altitude memory",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    source: "mock",
  },
  {
    id: "mock-3",
    type: "motion",
    title: "Body in process",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    source: "mock",
  },
];

function normalizeMediaType(mediaType?: string) {
  switch (mediaType) {
    case "VIDEO":
      return "reel";

    case "CAROUSEL_ALBUM":
      return "carousel";

    case "STORY":
      return "story";

    default:
      return "image";
  }
}
function createInstagramTitle(item: InstagramApiItem) {
  const caption = item.caption?.trim();

  if (!caption || caption === "#" || caption.length < 3) {
    return normalizeMediaType(item.media_type) === "reel"
      ? "Reel signal"
      : normalizeMediaType(item.media_type) === "carousel"
        ? "Carousel signal"
        : "Visual signal";
  }

  const firstLine = caption.split("\n")[0];

  if (firstLine.length > 90) {
    return `${firstLine.slice(0, 90)}...`;
  }

  return firstLine;
}

export async function getInstagramFeed(): Promise<{
  connected: boolean;
  profile: InstagramProfile | null;
  fragments: InstagramFragment[];
  stories: InstagramFragment[];
}> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/instagram`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Instagram fetch failed");
    }

    const json: InstagramResponse = await response.json();

    const fragments: InstagramFragment[] =
      json.data?.map((item) => ({
        id: item.id,

        type: normalizeMediaType(item.media_type),

        title: createInstagramTitle(item),

        image:
          item.media_type === "VIDEO"
            ? item.thumbnail_url || item.media_url || ""
            : item.media_url ||
              item.thumbnail_url ||
              item.children?.data?.[0]?.media_url ||
              "",

        permalink: item.permalink,

        source: "instagram",

        timestamp: item.timestamp,

        likeCount: item.like_count,

        commentsCount: item.comments_count,

        children: item.children?.data || [],

        comments: item.comments?.data || [],
      })) || [];

    const stories: InstagramFragment[] =
      json.stories?.map((story) => ({
        id: story.id,

        type: "story",

        title: "Instagram Story",

        image:
          story.thumbnail_url || story.media_url || "",

        permalink: story.permalink,

        source: "instagram",

        timestamp: story.timestamp,
      })) || [];

    return {
      connected: json.connected || false,

      profile: json.profile || null,

      fragments:
        fragments.length > 0 ? fragments : MOCK_FRAGMENTS,

      stories,
    };
  } catch (error) {
    console.error("Instagram error:", error);

    return {
      connected: false,

      profile: null,

      fragments: MOCK_FRAGMENTS,

      stories: [],
    };
  }
}