import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const USER_ID = process.env.INSTAGRAM_USER_ID;

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

  const [profileResponse, mediaResponse, storiesResponse] = await Promise.all([
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

  const profile = await profileResponse.json();
  const media = await mediaResponse.json();
  const stories = await storiesResponse.json();

  return NextResponse.json({
    connected: true,
    source: "instagram",
    profile,
    data: media.data || [],
    stories: stories.data || [],
    debug: {
      profileError: profile.error || null,
      mediaError: media.error || null,
      storiesError: stories.error || null,
    },
  });
}
