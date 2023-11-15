import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:8080/graphql");

export async function getPosts() {
  const query = gql`
    query queryPosts {
      posts {
        id
        title
        body
        user_id
        user_info {
          email
          name
        }
      }
    }
  `;

  const { posts } = await client.request(query, {
    query,
  });

  return posts;
}

export async function fetchPostById(id) {
  const query = gql`
    query getPostById($postId: ID!) {
      post(id: $postId) {
        id
        title
        body
        user_id
        user_info {
          email
          name
        }
      }
    }
  `;

  const { post } = await client.request(query, {
    postId: id,
  });

  return post;
}

export async function fetchUserById(id) {
  const query = gql`
    query getUserById($userId: ID!) {
      user(id: $userId) {
        id
        name
        email
        posts {
          title
          body
          id
          user_info {
            email
            name
          }
        }
      }
    }
  `;

  const { user } = await client.request(query, {
    userId: id,
  });

  return user;
}
