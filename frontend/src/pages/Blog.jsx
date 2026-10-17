import { useEffect, useState } from "react";
import { fetchBlog } from "../api";

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog()
      .then(setPosts)
      .catch(() => setError("Could not load blog. Is the backend running?"));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!posts) return <p className="status">Loading...</p>;

  return (
    <section className="blog">
      <h1>Blog</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
