import express from "express";
import youtubeRoutes from "./youtube.js";
import spotifyRoutes from "./spotify.js";

const router = express.Router();

router.use("/youtube", youtubeRoutes);
router.use("/spotify", spotifyRoutes);

export default router;
