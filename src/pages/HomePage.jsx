import { useEffect, useState } from "react";

import { getPosts } from "../lib/graphql/queries";
import PostsList from "../components/PostsList";

function HomePage() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getPostList();
  }, []);

  async function getPostList() {
    try {
      let postsData = await getPosts();

      setposts(postsData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export default HomePage;
