import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Spotify API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// Get user profile
router.get("/me", async (req, res) => {
  try {
    const { access_token } = req.query;

    if (!access_token) {
      return res.status(401).json({ error: "Access token is required" });
    }

    spotifyApi.setAccessToken(access_token);
    const data = await spotifyApi.getMe();

    res.json(data.body);
  } catch (error) {
    console.error("Spotify API error:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

// Create a playlist
router.post("/playlists", async (req, res) => {
  try {
    const { access_token, userId, name, description } = req.body;

    if (!access_token || !userId || !name) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    spotifyApi.setAccessToken(access_token);
    const data = await spotifyApi.createPlaylist(name, {
      description: description || "Imported from YouTube",
      public: false,
    });

    res.json(data.body);
  } catch (error) {
    console.error("Spotify API error:", error);
    res.status(500).json({ error: "Failed to create playlist" });
  }
});

// Search for tracks
router.get("/search", async (req, res) => {
  try {
    const { access_token, query } = req.query;

    if (!access_token || !query) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    spotifyApi.setAccessToken(access_token);
    const data = await spotifyApi.searchTracks(query);

    res.json(data.body);
  } catch (error) {
    console.error("Spotify API error:", error);
    res.status(500).json({ error: "Failed to search for tracks" });
  }
});

export default router;
