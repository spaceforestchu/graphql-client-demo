import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { fetchUserById } from "../lib/graphql/queries";
import PostsList from "../components/PostsList";
function UsersPage() {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [error, setError] = useState("....loading");
  const { id } = useParams();
  useEffect(() => {
    getUserPosts();
  }, [id]);

  async function getUserPosts() {
    try {
      let userDetailResult = await fetchUserById(id);

      setUserPosts(userDetailResult.posts);
      setUser(userDetailResult);
    } catch (error) {
      setError(error.response.errors[0].message);
    }
  }

  if (!user) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Author: {user.name}</h1>
      <PostsList posts={userPosts} />
    </div>
  );
}

export default UsersPage;
