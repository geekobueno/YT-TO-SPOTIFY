# YouTube to Spotify Playlist Migration Tool

A web application that allows users to easily migrate their YouTube playlists to Spotify. This tool authenticates with both platforms, extracts song information from YouTube playlists, matches them with Spotify tracks, and creates corresponding playlists in the user's Spotify account.

## 🎯 Project Overview

This application bridges the gap between YouTube and Spotify by providing a seamless way to transfer music collections. It handles the complexities of authorization, track matching, and playlist creation to provide a straightforward user experience.

### Key Features

- Connect to both YouTube and Spotify accounts via OAuth
- Fetch and display user's YouTube playlists
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
- **Passport.js**: Authentication middleware for OAuth flows

### APIs

- **Spotify Web API**: Access to Spotify's platform features and user data
- **YouTube Data API**: Access to YouTube playlists and video metadata

## 🗺️ Project Roadmap

### Phase 1: Foundation (MVP)

- [x] Project setup and repository creation
- [ ] Basic frontend structure with Vite and React
- [ ] Express server setup
- [ ] Spotify OAuth implementation
- [ ] YouTube OAuth implementation
- [ ] Display user Spotify profile

### Phase 2: Core Functionality

- [ ] Fetch YouTube playlists
- [ ] Display YouTube playlists in UI
- [ ] Implement YouTube track data extraction
- [ ] Develop Spotify search algorithm
- [ ] Create new playlists in Spotify
- [ ] Add tracks to Spotify playlists

### Phase 3: Enhanced Features

- [ ] Batch processing for large playlists
- [ ] Improved matching algorithm with multiple fallbacks
- [ ] Migration history and status saving
- [ ] Progress visualization
- [ ] Error handling and recovery options

### Phase 4: Polish and Extensions

- [ ] UI refinements and responsive design
- [ ] Performance optimizations
- [ ] Export/import of migration configurations
- [ ] Handling of private/public playlist settings
- [ ] Support for additional metadata (descriptions, thumbnails)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Spotify Developer account
- Google Developer account with YouTube Data API access

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/youtube-spotify-migration.git
cd youtube-spotify-migration
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
YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
YOUTUBE_REDIRECT_URI=http://localhost:3001/auth/youtube/callback
```

4. Start the development server:

```bash
# Start backend and frontend concurrently
npm run dev
```

## 🔒 Authentication Flow

This application uses OAuth 2.0 for both Spotify and YouTube:

1. User initiates login with either service
2. User is redirected to service's authorization page
3. User grants permissions to the application
4. Service redirects back with an authorization code
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
5. Open a Pull Request
