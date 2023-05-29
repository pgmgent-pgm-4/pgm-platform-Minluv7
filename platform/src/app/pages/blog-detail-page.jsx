// Import external modules
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
// Import internal modules
import { useFetch } from "../hooks";
import { useEffect } from "react";
import { useState } from "react";

import { useThemeContext } from '../context/theme.context';

const GET_BLOG = gql`
query GetBlogById($postId: String!) {
    post(where: { slug: $postId }) {
      id
      title
      slug
      body
      img
    }
  }
`;

const BlogDetailsPage = () => {
  const { isDarkMode } = useThemeContext();
  const { postId} = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { postId}
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


  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Post Details</h1>
      {data.post && 
        <article>
             {loading ? <Spinner>LOADING</Spinner> : null}
          <h1>{data.post.title}</h1>
          <img src={data.post.img} alt="" />
          <p>{data.post.body}</p>
        </article>
      }
    </div>
  )
};

export default BlogDetailsPage;