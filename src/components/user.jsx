import {
  Users,
  GitBranch,
  BookOpen,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    name,
    bio,
    location,
    blog,
    html_url,
  } = user;

  return (
    <div className="max-w-md mx-auto mt-10 bg-black border border-gray-800 shadow-2xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">

      <div className="flex flex-col items-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md"
        />

        <h2 className="mt-4 text-2xl font-bold text-white tracking-wide">
          {name || login}
        </h2>

        <p className="text-gray-400 font-medium">@{login}</p>

        {bio && (
          <p className="mt-3 text-gray-300 text-center text-sm">
            {bio}
          </p>
        )}
      </div>

      <div className="border-t border-gray-800 my-6"></div>

      <div className="grid grid-cols-3 text-center gap-4">
        <div className="flex flex-col items-center">
          <Users className="text-white" size={20} />
          <span className="font-semibold text-white mt-1">
            {followers}
          </span>
          <span className="text-xs text-gray-500">Followers</span>
        </div>

        <div className="flex flex-col items-center">
          <GitBranch className="text-white" size={20} />
          <span className="font-semibold text-white mt-1">
            {following}
          </span>
          <span className="text-xs text-gray-500">Following</span>
        </div>

        <div className="flex flex-col items-center">
          <BookOpen className="text-white" size={20} />
          <span className="font-semibold text-white mt-1">
            {public_repos}
          </span>
          <span className="text-xs text-gray-500">Repos</span>
        </div>
      </div>
      <div className="mt-6 space-y-3 text-sm">

        {location && (
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={16} className="text-white" />
            <span>{location}</span>
          </div>
        )}

        {blog && (
          <div className="flex items-center gap-2 text-gray-400">
            <LinkIcon size={16} className="text-white" />
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {blog}
            </a>
          </div>
        )}

        <div className="pt-4">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 active:scale-95 transition"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}