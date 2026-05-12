import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const USER_ID = process.env.INSTAGRAM_USER_ID;

async function readJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return {
      error: {
        message: "Unable to parse Instagram response.",
        status: response.status,
      },
    };
  }
}

export async function GET() {
  if (!ACCESS_TOKEN || !USER_ID) {
    return NextResponse.json({
      connected: false,
      source: "mock",
      message: "No Instagram token found. Using mock data.",
    });
  }

  const profileUrl = `https://graph.instagram.com/${USER_ID}?fields=id,username,account_type,media_count,followers_count,follows_count&access_token=${ACCESS_TOKEN}`;

  const mediaUrl = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count,children{media_type,media_url,thumbnail_url},comments{text,username,timestamp}&limit=50&access_token=${ACCESS_TOKEN}`;

  const storiesUrl = `https://graph.instagram.com/${USER_ID}/stories?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${ACCESS_TOKEN}`;

  try {
    const [profileResponse, mediaResponse, storiesResponse] =
      await Promise.all([
        fetch(profileUrl, {
          cache: "no-store",
        }),

        fetch(mediaUrl, {
          cache: "no-store",
        }),

        fetch(storiesUrl, {
          cache: "no-store",
        }),
      ]);

    const [profile, media, stories] = await Promise.all([
      readJson(profileResponse),
      readJson(mediaResponse),
      readJson(storiesResponse),
    ]);

    return NextResponse.json({
      connected: true,
      source: "instagram",

      profile: profile.error ? null : profile,

      data: media.data || [],

      stories: stories.data || [],

      meta: {
        hasStories: Boolean(stories.data?.length),
        storiesCount: stories.data?.length || 0,
        mediaCount: media.data?.length || 0,
        profileStatus: profileResponse.status,
        mediaStatus: mediaResponse.status,
        storiesStatus: storiesResponse.status,
      },

      debug: {
        profileError: profile.error || null,
        mediaError: media.error || null,
        storiesError: stories.error || null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        connected: false,
        source: "instagram",
        message: "Instagram API request failed.",
        error:
          error instanceof Error
            ? error.message
            : "Unknown Instagram API error.",
      },
      {
        status: 500,
      },
    );
  }
}