
import Navbar from "./Navbar/page";

export default async function Home () {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
        <div>
        <ul className="list-disc pl-5">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="mb-2">
              <a href={`/blog/${post.id}`} className="text-[#FFA500] hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}
