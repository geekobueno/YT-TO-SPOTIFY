# YouTube to Spotify Playlist Transfer

## Introduction
This Node.js script extracts playlist data from YouTube and transfers it to Spotify. It uses `ytpl`, `ytdl-core`, and `spotify-api` libraries to handle the transfer process.

## Prerequisites
* Node.js and npm installed
* Required libraries:
```bash
npm install ytpl ytdl-core node-spotify-api
```
* Spotify Developer account with client ID and secret
* Source YouTube playlist URL
* Target Spotify playlist URL

## Setup Guide

1. Clone the repository:
```bash
git clone https://github.com/geekobueno/YT-TO-SPOTIFY
```

2. Install dependencies:
```bash
cd your-repo-name
npm install
```

3. Configure credentials:
* Open `index.js`
* Replace placeholders:
  * `YOUR_CLIENT_ID` - Spotify client ID
  * `YOUR_CLIENT_SECRET` - Spotify client secret
  * `YOUR_YOUTUBE_PLAYLIST_URL` - Source playlist
  * `YOUR_SPOTIFY_PLAYLIST_URL` - Target playlist

4. Run the script:
```bash
node index.js
```

## How It Works

The script follows these steps:

1. Fetches playlist data from YouTube using `ytpl`
2. Extracts detailed video information with `ytdl-core`
3. Saves playlist data to a local file for review
4. Authenticates with Spotify API
5. Transfers songs to the specified Spotify playlist

## Configuration Options

* **Output File**: Modify `outputFilename` variable to change where playlist data is saved
* **Spotify Auth**: Customize authentication flow if needed (supports Authorization Code and Implicit Grant)
* **Data Format**: Adjust how song data is processed and matched

## Important Notes

* Script requires appropriate Spotify playlist permissions
* May not handle very large playlists effectively
* Can be customized for specific needs like:
  * Different output formats
  * Additional data processing
  * Custom matching algorithms

For support or to report issues, please visit the GitHub repository.
