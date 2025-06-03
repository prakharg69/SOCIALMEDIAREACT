import { useState } from "react";
import Createpost from "./Createpost";
import Posts from "./POsts"; // Make sure the file is named correctly (Posts.js)

function Slidebar() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isShowingPosts, setIsShowingPosts] = useState(false);
  const [Postlist, setPostlist] = useState([]);

  const handleShowCreatePost = () => {
    setIsCreatingPost(true);
    setIsShowingPosts(false);
  };

  const handleShowPosts = () => {
    setIsCreatingPost(false);
    setIsShowingPosts(true);
  };

  const handlePostList = (e, post) => {
    e.preventDefault();
    setPostlist(prev => [...prev, ...post]); // ✅ Append new posts instead of replacing
    console.log("Updated Posts:", [...Postlist]);
  };
  const DeletePost =(userId)=>{
    setPostlist(prev => prev.filter(post => post.userId !== userId));
    console.log("Post deleted:", userId);
  }

  return (
    <div className="section1 flex">
      {/* Sidebar */}
      <div className="h-screen w-[260px] bg-gradient-to-b from-gray-900 via-purple-900 to-gray-800 shadow-lg shadow-purple-700/30 flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-wide bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            DASHBOARD
          </h2>
          <ul className="space-y-6">
            <li>
              <button
                className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md shadow-pink-500/20"
                onClick={handleShowPosts}
              >
                POSTS
              </button>
            </li>
            <li>
              <button
                className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md shadow-pink-500/20"
                onClick={handleShowCreatePost}
              >
                CREATE POST
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Area */}
      <div className="part2 flex-1">
        {isCreatingPost && <Createpost handlePostList={handlePostList} />}
        {isShowingPosts && <Posts postss={Postlist} DeletePost={DeletePost}/>}
      </div>
    </div>
  );
}

export default Slidebar;
