import { useState } from "react";
function Createpost({ handlePostList }) {
  let [uid, setUserId] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [reactions, setReactions] = useState(0);
  let [hashtags, setHashtags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: input validation
    if (!uid || !title || !content) {
      alert("Please fill out User ID, Title, and Content.");
      return;
    }

    const newPost = {
      userId: uid,
      title: title,
      content: content,
      reactions: Number(reactions) || 0,
      hashtags: hashtags.trim(),
    };

    handlePostList(e, [newPost]);

    // Clear form
    setUserId("");
    setTitle("");
    setContent("");
    setReactions(0);
    setHashtags("");
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center">
      <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-lg shadow-purple-600/30 p-8">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Create a New Post
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="UserId" className="block mb-2 text-sm font-medium">
              User ID
            </label>
            <input
              id="UserId"
              type="text"
              placeholder="Your user ID..."
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={uid}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="UserTitle"
              className="block mb-2 text-sm font-medium"
            >
              Post Title
            </label>
            <input
              id="UserTitle"
              type="text"
              placeholder="How are you feeling..."
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="postContent"
              className="block mb-2 text-sm font-medium"
            >
              Post Content
            </label>
            <textarea
              id="postContent"
              rows="4"
              placeholder="What's on your mind?"
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="Reac" className="block mb-2 text-sm font-medium">
              Number of Reactions
            </label>
            <input
              id="Reac"
              type="number"
              placeholder="How much reacted..."
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={reactions}
              onChange={(e) => setReactions(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="Has" className="block mb-2 text-sm font-medium">
              Hashtags
            </label>
            <input
              id="Has"
              type="text"
              placeholder="Enter tags separated by spaces..."
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all shadow-md shadow-pink-500/20"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createpost;
