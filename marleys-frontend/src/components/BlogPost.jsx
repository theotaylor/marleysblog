const BlogPost = ({ post }) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <a href={`/posts/${post.id}`}>Read more</a>
      </div>
    );
  };
  
  export default BlogPost