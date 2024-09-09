const ytpl = require('ytpl');
const ytdl = require('ytdl-core');
const SpotifyWebApi = require('spotify-api');
const fs = require('fs');

// Replace placeholders with your actual credentials and playlist URLs
const spotifyApi = new SpotifyWebApi({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
});

const youtubePlaylistUrl = 'YOUR_YOUTUBE_PLAYLIST_URL';
const spotifyPlaylistUrl = 'YOUR_SPOTIFY_PLAYLIST_URL';
const outputFilename = 'youtube_playlist_data.txt';

// Function to add songs to a Spotify playlist
async function addSongsToPlaylist(playlistId, songs) {
  try {
    // Get the playlist ID from the URL
    const playlistUri = spotifyPlaylistUrl.split('/')[4];

    // Add tracks to the playlist
    await spotifyApi.addTracksToPlaylist(playlistUri, songs);

    console.log('Songs added to the playlist successfully!');
  } catch (error) {
    console.error('Error adding songs to the playlist:', error);
  }
}

// Function to fetch playlist data from YouTube and save it to a file
async function fetchYouTubePlaylistData() {
  try {
    const playlistInfo = await ytpl(youtubePlaylistUrl, { limit: Infinity });

    const songs = playlistInfo.items.map((video) => {
      const videoId = video.id;
      const videoInfo = ytdl.getInfo(videoId);
      const { title, author } = videoInfo.videoDetails;
      return `${author} - ${title}`;
    });

    // Save songs to a text file
    fs.writeFileSync(outputFilename, songs.join('\n'));

    return songs;
  } catch (error) {
    console.error('Error fetching YouTube playlist data:', error);
  }
}

// Main function
async function main() {
  try {
    // Authenticate with Spotify
    await spotifyApi.clientCredentialsGrant().then((data) => {
      spotifyApi.setAccessToken(data.body.access_token);
    });

    // Get songs from YouTube playlist and save to file
    const songs = await fetchYouTubePlaylistData();

    // Get the playlist ID from the Spotify URL
    const playlistId = spotifyPlaylistUrl.split('/')[4];

    // Add songs to the Spotify playlist
    await addSongsToPlaylist(playlistId, songs);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
