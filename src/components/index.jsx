import React, { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("MuzammilAadam");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`https://api.github.com/users/${userName}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-white flex flex-col items-center px-4 py-16">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-10">
        GitHub Profile Finder
      </h1>

      {/* Search Section */}
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search GitHub Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="flex-1 px-4 py-2 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-white transition text-white placeholder-gray-500"
          />

          <button
            onClick={handleSubmit}
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 active:scale-95 transition"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 text-center text-gray-400">
            Loading...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 text-center text-gray-400">
            {error}
          </div>
        )}
      </div>

      {/* User Card */}
      <div className="w-full mt-12">
        {userData && <User user={userData} />}
      </div>
    </div>
  );
}