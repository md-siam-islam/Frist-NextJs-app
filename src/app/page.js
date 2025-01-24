import Navbar from "./Navbar/page";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">All Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 10).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold mb-2 text-blue-700">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.body.length > 100
                  ? post.body.slice(0, 100) + "..."
                  : post.body}
              </p>
              <a
                href={`/blog/${post.id}`}
                className="inline-block bg-[#FFA500] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Read More..
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
