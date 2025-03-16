# YouTube to Spotify Playlist Migration Tool

A web application built with Preact and SSR that allows users to easily migrate YouTube playlists to Spotify by simply providing a YouTube playlist URL. This tool extracts song information from public YouTube playlists, matches them with Spotify tracks, and creates corresponding playlists in the user's Spotify account.

## 🎯 Project Overview

This application bridges the gap between YouTube and Spotify by providing a seamless way to transfer music collections. It uses server-side rendering for improved performance and a better user experience, while handling the complexities of track matching and playlist creation.

### Key Features

- Simple URL-based YouTube playlist import (no YouTube account required)
- Connect to Spotify account via OAuth
- Server-side processing of YouTube playlist data
- Intelligent song matching for accurate track identification
- Create new Spotify playlists with matched tracks
- Real-time progress tracking and error reporting
- Fast, responsive Preact-based UI with SSR

## 🛠️ Tech Stack

### Frontend
- **Preact**: Lightweight alternative to React with the same modern API
- **Vite**: Next generation frontend tooling for fast development
- **Server-Side Rendering (SSR)**: For improved performance and SEO
- **Tailwind CSS**: Utility-first CSS framework for styling

### Backend
- **Node.js + Express**: Server-side application handling API interactions
- **Passport.js**: Authentication middleware for Spotify OAuth
- **Vite SSR**: Server-side rendering capabilities for Vite

### APIs
- **Spotify Web API**: Access to Spotify's platform features and user data
- **YouTube Data API v3**: Access to public YouTube playlist data (API key only)

## 🗺️ Project Roadmap

### Phase 1: Foundation (MVP)
- [x] Project setup and repository creation
- [ ] Vite + Preact SSR configuration
- [ ] Express server integration
- [ ] Spotify OAuth implementation
- [ ] YouTube playlist URL parser
- [ ] Display user Spotify profile

### Phase 2: Core Functionality
- [ ] Server-side YouTube playlist data extraction
- [ ] Title parsing algorithms for artist/track extraction
- [ ] Display extracted YouTube playlist data
- [ ] Develop Spotify search and matching service
- [ ] Create new playlists in Spotify
- [ ] Add tracks to Spotify playlists

### Phase 3: Enhanced Features
- [ ] Server-side batch processing for large playlists
- [ ] Advanced title parsing with multiple extraction patterns
- [ ] Manual correction interface for unmatched tracks
- [ ] Migration history and status persistence
- [ ] Real-time progress visualization
- [ ] Robust error handling and recovery

### Phase 4: Polish and Extensions
- [ ] UI refinements and responsive design
- [ ] Performance optimizations (caching, lazy loading)
- [ ] Support for multiple YouTube playlist formats
- [ ] Handling of private/public Spotify playlist settings
- [ ] Custom naming and description options for created playlists

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Spotify Developer account
- Google Developer account with YouTube Data API access (for API key)

### Installation

1. Clone the repository:
```bash
git https://github.com/geekobueno/YT-TO-SPOTIFY.git
cd YT-TO-SPOTIFY
cd migrator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
# Server
PORT=3001
NODE_ENV=development

# Spotify API
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3001/auth/spotify/callback

# YouTube API
YOUTUBE_API_KEY=your_youtube_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🎵 Playlist Migration Process

The application follows these steps to migrate YouTube playlists to Spotify:

1. **Extraction**: Parse YouTube playlist URL and fetch video data using the YouTube API
2. **Analysis**: Process video titles to extract artist and track information
3. **Matching**: Search Spotify for matching tracks using extracted information
4. **Creation**: Create a new Spotify playlist and add matched tracks
5. **Reporting**: Generate a summary of successful matches and any issues

## 🔒 Authentication and Security

This application implements Spotify OAuth 2.0 authentication with server-side token management:

1. Users initiate Spotify login via the application
2. After authorization, token exchange happens server-side
3. Refresh tokens are securely stored for persistent access
4. No YouTube authentication is required - only public/unlisted playlists are supported

## 🧩 Project Structure

```
youtube-spotify-migration/
├── src/                     # Source code
│   ├── client/              # Client-side Preact code
│   │   ├── components/      # UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   └── utils/           # Client utilities
│   ├── server/              # Server-side code
│   │   ├── api/             # API routes
│   │   ├── auth/            # Authentication logic
│   │   ├── services/        # Business logic services
│   │   │   ├── spotify.js   # Spotify API integration
│   │   │   ├── youtube.js   # YouTube API integration
│   │   │   └── parser.js    # Title parsing service
│   │   └── utils/           # Server utilities
│   └── shared/              # Shared between client and server
│       ├── config/          # Configuration
│       └── types/           # TypeScript types/interfaces
├── public/                  # Static assets
├── vite.config.js           # Vite configuration
├── server.js                # SSR entry point
├── .env                     # Environment variables
└── package.json             # Project metadata and dependencies
```

## 📋 Development Workflow

1. **Local Development**:
   - Run `npm run dev` to start the development server with HMR
   - Server-side and client-side code will be watched for changes

2. **Building for Production**:
   - Run `npm run build` to generate optimized client and server bundles
   - Run `npm start` to start the production server

3. **Testing**:
   - Run `npm test` to execute the test suite

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
