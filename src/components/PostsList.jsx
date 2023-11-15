import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <li className="posts-list-li">
      <Link to={`/posts/${post.id}`}>
        <div>Title: {post.title}</div>
      </Link>
      <div>Body: {post.body}</div>
      <Link to={`/users/${post.user_id}`}>
        <div>By: {post.user_info.name}</div>
      </Link>
    </li>
  );
}

function PostsList({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostsList;
