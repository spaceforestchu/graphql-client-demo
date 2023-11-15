import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { fetchPostById } from "../lib/graphql/queries";

function PostsPage() {
  const { id } = useParams();

  const [post, setpost] = useState(null);
  const [error, setError] = useState("....loading");
  useEffect(() => {
    getPostDetails();
  }, [id]);

  async function getPostDetails() {
    try {
      let postDetailResult = await fetchPostById(id);
      setpost(postDetailResult);
    } catch (error) {
      console.error(error.response.errors[0].message);
      setError(error.response.errors[0].message);
    }
  }

  if (!post) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link to={`/users/${post.user_id}`}>
        <p>by {post.user_info.name}</p>
      </Link>
    </div>
  );
}

export default PostsPage;
