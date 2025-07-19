import { useParams, Link } from 'react-router-dom';

const blogData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post #${i + 1}`,
  text: `This is full content for blog post #${i + 1}. It may include much more detail and formatting.`,
}));

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{blog.title}</h1>
      <img
        src={`https://source.unsplash.com/random/800x400?sig=${blog.id}`}
        alt="Blog visual"
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <p>{blog.text}</p>
      <br />
      <Link to="/" style={{ textDecoration: 'none' }}>
        ← Back to all posts
      </Link>
    </div>
  );
}

export default BlogDetails;
