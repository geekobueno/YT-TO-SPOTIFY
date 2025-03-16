import { useState } from "preact/hooks";

export default function PlaylistImport({ onImport }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImport = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/youtube/playlist?url=${encodeURIComponent(url)}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to import playlist");
      }

      onImport(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Import YouTube Playlist</h2>
      <form onSubmit={handleImport}>
        <div className="mb-4">
          <label
            htmlFor="playlist-url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            YouTube Playlist URL
          </label>
          <input
            id="playlist-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/playlist?list=..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading || !url}
          className={`w-full py-2 px-4 rounded-md ${
            isLoading || !url
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isLoading ? "Loading..." : "Import Playlist"}
        </button>
      </form>
    </div>
  );
}
