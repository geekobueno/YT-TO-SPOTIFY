# YouTube to Spotify Playlist Migration Tool

A web application that allows users to easily migrate YouTube playlists to Spotify by simply providing a YouTube playlist URL. This tool extracts song information from public YouTube playlists, matches them with Spotify tracks, and creates corresponding playlists in the user's Spotify account.

## 🎯 Project Overview

This application bridges the gap between YouTube and Spotify by providing a seamless way to transfer music collections. It handles the complexities of track matching and playlist creation to provide a straightforward user experience.

### Key Features

- Simple URL-based YouTube playlist import (no YouTube account required)
- Connect to Spotify account via OAuth
- Extract song information from YouTube playlist videos
- Intelligent song matching for accurate track identification
- Create new Spotify playlists with matched tracks
- Detailed progress tracking and error reporting
- Clean, responsive user interface

## 🛠️ Tech Stack

### Frontend
- **Vite.js + React**: Fast development environment and component-based UI
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Query**: Data fetching, caching, and state management

### Backend
- **Node.js + Express**: Server-side application handling API interactions
- **Passport.js**: Authentication middleware for Spotify OAuth

### APIs
- **Spotify Web API**: Access to Spotify's platform features and user data
- **YouTube Data API v3**: Access to public YouTube playlist data (no authentication needed)

## 🗺️ Project Roadmap

### Phase 1: Foundation (MVP)
- [x] Project setup and repository creation
- [ ] Basic frontend structure with Vite and React
- [ ] Express server setup
- [ ] Spotify OAuth implementation
- [ ] YouTube playlist URL parser
- [ ] Display user Spotify profile

### Phase 2: Core Functionality
- [ ] YouTube playlist data extraction from URL
- [ ] Parse video titles for artist/track information
- [ ] Display extracted YouTube playlist data in UI
- [ ] Develop Spotify search algorithm
- [ ] Create new playlists in Spotify
- [ ] Add tracks to Spotify playlists

### Phase 3: Enhanced Features
- [ ] Batch processing for large playlists
- [ ] Improved title parsing with multiple extraction patterns
- [ ] Manual correction interface for unmatched tracks
- [ ] Migration history and status saving
- [ ] Progress visualization
- [ ] Error handling and recovery options

### Phase 4: Polish and Extensions
- [ ] UI refinements and responsive design
- [ ] Performance optimizations
- [ ] Support for multiple YouTube playlist formats (public/unlisted)
- [ ] Handling of private/public Spotify playlist settings
- [ ] Custom naming and description options for created playlists

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Spotify Developer account
- Google Developer account with YouTube Data API access (for API key only)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/geekobueno/YT-TO-SPOTIFY.git
cd YT-TO-SPOTIFY
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
# Server
PORT=3001

# Spotify API
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/spotify/callback

# YouTube API
YOUTUBE_API_KEY=your_youtube_api_key
```

4. Start the development server:
```bash
# Start backend and frontend concurrently
npm run dev
```

## 🎵 YouTube URL Processing

Instead of requiring YouTube authentication, this application works with public YouTube playlist URLs:

1. User enters a YouTube playlist URL (e.g., `https://www.youtube.com/playlist?list=PLH-MmL68X2XXH_FqQ4KoDGEHXBZDiYm0L`)
2. Backend extracts the playlist ID from the URL
3. YouTube Data API is used to fetch playlist details using an API key
4. Video titles are parsed to extract artist and track information
5. This information is used to search for matching tracks on Spotify

## 🔒 Spotify Authentication Flow

This application uses OAuth 2.0 for Spotify:

1. User initiates login with Spotify
2. User is redirected to Spotify's authorization page
3. User grants permissions to the application
4. Spotify redirects back with an authorization code
5. Backend exchanges the code for access and refresh tokens
6. Tokens are securely stored for API requests

## 🧩 Project Structure

```
youtube-spotify-migration/
├── client/                  # Frontend React application
│   ├── public/              # Static assets
│   ├── src/                 # React source files
│   │   ├── components/      # UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   └── utils/           # Utility functions
│   └── vite.config.js       # Vite configuration
├── server/                  # Backend Node.js/Express application
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Express middleware
│   ├── routes/              # API routes
│   ├── services/            # Service layer
│   │   ├── spotify.js       # Spotify API integration
│   │   ├── youtube.js       # YouTube API integration
│   │   └── parser.js        # Title parsing service
│   └── utils/               # Utility functions
├── .env                     # Environment variables
└── package.json             # Project metadata and dependencies
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull RequestI