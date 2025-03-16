import express from "express";
import spotifyAuth from "./spotify.js";

const router = express.Router();

router.use("/spotify", spotifyAuth);

export default router;
