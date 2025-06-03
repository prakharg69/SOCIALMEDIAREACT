import Eachpost from "./Eachpost";

function Posts({ postss ,DeletePost }) {
  return (
    <div className="Post min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center overflow-hidden">
      <div className="container h-[46rem] overflow-y-scroll flex flex-col gap-1.5 p-6">
        {postss && postss.length > 0 ? (
          postss.map((post, index) => (
            <Eachpost
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
              reactions={post.reactions}
              hashtags={post.hashtags}
                DeletePost={DeletePost}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">No posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
