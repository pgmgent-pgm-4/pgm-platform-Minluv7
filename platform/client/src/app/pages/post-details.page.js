import {
  gql,
  useQuery,
} from "@apollo/client";
import { useParams } from "react-router-dom";

// Custom components
import { PostDetailsComponent } from '../components/posts';

// GraphQL queries
const POST = gql`
query GetPostById ($postId: ID!) {
  post(where: {id: $postId}) {
    id
    title
    synopsis
    body {
      html
    }
    thumbnailUrl
    authUser {
      username,
      profile {
        firstName
        lastName
      }
    }
    tags {
      name
    }
    category {
      name
    }
  }
}
`;

const PostDetailsPage = () => {
  let params = useParams();
  let postId = (params.postId);

  const { loading, error, data } = useQuery(POST, { 
    variables: {
      postId: postId
    }
  });

  const gqlResult = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}Error :(</p>;

    return (
      <PostDetailsComponent post={data.post} />
    );
  };

  return (
    <>
      {gqlResult()}
    </>
  )
};

export default PostDetailsPage;