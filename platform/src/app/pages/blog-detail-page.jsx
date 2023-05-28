// Import external modules
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
// Import internal modules
import { useFetch } from "../hooks";
import { useEffect } from "react";
import { useState } from "react";

const GET_BLOG = gql`
query GetBlogById($postId: ID!) {
    post(where: { id: $postId }) {
      id
      title
      slug
      body
      image {
        id
        url
      }
      authUser {
        userName
      }
    }
  }
`;

//const NEWS_API = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const BlogDetailsPage = () => {
  const [post, setPost] = useState(null);

  const { postId } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: {postId}
  });

  if (loading) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  if (error ){
    return <p>{error ? error.toString(): error.toString()}</p>;
  }
//   useEffect(() => {
//     if (data !== null) {
//       setPost(data.articles[postId]);
//     }
    
//   }, [data, postId]);

  return (
    <>
      <h1>Post Details</h1>
      {data.post && 
        <article>
             {loading ? <Spinner>LOADING</Spinner> : null}
          <h1>{data.post.title}</h1>
        </article>
      }
    </>
  )
};

export default BlogDetailsPage;