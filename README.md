Introduction


This Node.js script is designed to extract playlist data from YouTube, save it to a text file for review, and then add it to a Spotify playlist. It leverages the ytpl, ytdl-core, and spotify-api libraries to achieve this functionality.

Prerequisites


Node.js and npm (or yarn) installed
ytpl, ytdl-core, and node-spotify-api libraries installed:
Bash
npm install ytpl ytdl-core node-spotify-api

A Spotify Developer account and a client ID and client secret
A Spotify playlist URL and a YouTube playlist URL


Usage


Clone the repository:


Bash
git clone https://github.com/geekobueno/YT-TO-SPOTIFY

Install dependencies:


Bash
cd your-repo-name
npm install   


Replace placeholders:


Open the index.js file and replace the placeholders for your Spotify client ID, client secret, YouTube playlist URL, and Spotify playlist URL.


Run the script:

Bash
node index.js

Configuration


Spotify Credentials: Replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET with your actual Spotify Developer credentials.

Playlist URLs: Replace YOUR_YOUTUBE_PLAYLIST_URL and YOUR_SPOTIFY_PLAYLIST_URL with the respective URLs of your YouTube and Spotify playlists.

Output Filename: Customize the outputFilename variable in the script to change the name of the text file where the playlist data is saved.


How it Works

Fetches playlist data from YouTube: Uses ytpl to extract information about the YouTube playlist, including video titles and authors.

Gets video details: Employs ytdl-core to retrieve additional details about each video, such as the artist.

Saves playlist data to file: Writes the extracted playlist data to a text file for review.

Adds songs to Spotify playlist: Authenticates with the Spotify API using spotify-api and adds the extracted songs to the specified Spotify playlist.


Additional Notes

Ensure you have the necessary permissions to add songs to the Spotify playlist.

For more complex Spotify API interactions, you might need to implement authorization flows like Authorization Code Flow or Implicit Grant Flow.

Customize the script to fit your specific needs, such as modifying the output format or adding additional features.

Enjoy using this script to effortlessly transfer your YouTube playlists to Spotify!


ATTENTION

might not work with very large playlist
