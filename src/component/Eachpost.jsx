function Eachpost({userId, title, content, reactions, hashtags, DeletePost}) {
            return(<div className="bg-gray-900 w-[340px] sm:w-[400px] rounded-2xl shadow-lg shadow-purple-600/40 p-6 text-white border border-purple-700/30 relative">
          {/* Delete Button */}
          <button className="absolute top-[-8px] right-0 text-sm h-[2rem] w-[2rem] rounded-[50%] bg-amber-200 text-red-400 cursor-pointer" onClick={() => DeletePost(userId)}>
            ❌
          </button>

          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {title}
            </h3>
            <span className="text-sm text-gray-400">👤 {userId}</span>
          </div>

          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {content}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
            <span>💖 {reactions} reactions</span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-700/30 px-2 py-1 rounded-xl text-pink-300">
                {hashtags}
              </span>
              
            </div>
          </div>
        </div>
);
}
export default Eachpost;