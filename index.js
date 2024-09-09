const ytpl = require('ytpl');
const ytdl = require('ytdl-core');
const SpotifyWebApi = require('spotify-web-api-node');
const fs = require('fs').promises;

// YouTube configuration
const youtubePlaylistUrl = 'YOUR_YOUTUBE_PLAYLIST_URL';

// Spotify configuration
const spotifyApi = new SpotifyWebApi({
  clientId: 'YOUR_SPOTIFY_CLIENT_ID',
  clientSecret: 'YOUR_SPOTIFY_CLIENT_SECRET',
});

const spotifyPlaylistId = 'YOUR_SPOTIFY_PLAYLIST_ID';

function removeTopicSuffix(artistName) {
  return artistName.endsWith(' - Topic') ? artistName.slice(0, -8) : artistName;
}

async function fetchYoutubePlaylistData(playlistUrl) {
  try {
    const playlistInfo = await ytpl(playlistUrl, { limit: Infinity });
    console.log(`Found ${playlistInfo.items.length} videos in the YouTube playlist.`);

    const songs = [];
    for (const [index, video] of playlistInfo.items.entries()) {
      try {
        const videoInfo = await ytdl.getInfo(video.id);
        const { title } = videoInfo.videoDetails;
        const author = removeTopicSuffix(videoInfo.videoDetails.author.name);
        songs.push({ title, author });
        console.log(`Processed ${index + 1}/${playlistInfo.items.length}: ${title} - ${author}`);
      } catch (error) {
        console.error(`Error processing video ${video.id}:`, error.message);
      }
    }

    return songs;
  } catch (error) {
    console.error('Error fetching YouTube playlist data:', error);
    return [];
  }
}

async function searchSpotifyTrack(query) {
  const result = await spotifyApi.searchTracks(query, { limit: 1 });
  if (result.body.tracks.items.length > 0) {
    return result.body.tracks.items[0].uri;
  }
  return null;
}

async function addTracksToSpotifyPlaylist(playlistId, trackUris) {
  await spotifyApi.addTracksToPlaylist(playlistId, trackUris);
  console.log(`Added ${trackUris.length} tracks to the Spotify playlist.`);
}

async function main() {
  try {
    console.log('Starting YouTube playlist data extraction...');
    const songs = await fetchYoutubePlaylistData(youtubePlaylistUrl);

    if (songs.length === 0) {
      console.log('No songs were extracted from the YouTube playlist.');
      return;
    }

    console.log('YouTube data extraction complete. Authenticating with Spotify...');
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    console.log('Adding songs to Spotify playlist...');
    const batchSize = 100; // Spotify allows up to 100 tracks per request
    for (let i = 0; i < songs.length; i += batchSize) {
      const batch = songs.slice(i, i + batchSize);
      const trackUris = [];
      
      for (const song of batch) {
        const query = `track:${song.title} artist:${song.author}`;
        const uri = await searchSpotifyTrack(query);
        if (uri) {
          trackUris.push(uri);
        } else {
          console.log(`Could not find a match for: ${song.title} - ${song.author}`);
        }
      }
      
      if (trackUris.length > 0) {
        await addTracksToSpotifyPlaylist(spotifyPlaylistId, trackUris);
      }
      
      console.log(`Processed ${i + batch.length} out of ${songs.length} songs.`);
    }

    console.log('Finished adding songs to the Spotify playlist.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
