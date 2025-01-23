// app/blog/page.js

async function fetchBlogs() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return res.json();
  }
  
  export default async function BlogPage() {
    const blogs = await fetchBlogs();
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <a
                href={`/blog/${blog.id}`}
                className="text-blue-500 hover:underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  