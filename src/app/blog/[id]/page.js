// app/blog/[id]/page.js

async function fetchBlogDetails(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch blog details");
    }
    return res.json();
  }
  
  export default async function BlogDetailsPage({ params }) {
    const { id } = params; 
    const blog = await fetchBlogDetails(id);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700">{blog.body}</p>
      </div>
    );
  }
  