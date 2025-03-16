import express from "express";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

// Get playlist data by URL/ID
router.get("/playlist", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "Playlist URL is required" });
    }

    // Extract playlist ID from URL
    const playlistId = extractPlaylistId(url);

    if (!playlistId) {
      return res.status(400).json({ error: "Invalid YouTube playlist URL" });
    }

    // Fetch playlist data
    const response = await youtube.playlistItems.list({
      part: "snippet",
      playlistId: playlistId,
      maxResults: 50,
    });

    // Extract video information
    const videos = response.data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails,
    }));

    res.json({ playlistId, videos });
  } catch (error) {
    console.error("YouTube API error:", error);
    res.status(500).json({ error: "Failed to fetch playlist data" });
  }
});

// Helper function to extract playlist ID from URL
function extractPlaylistId(url) {
  const regex = /(?:list=)([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default router;
