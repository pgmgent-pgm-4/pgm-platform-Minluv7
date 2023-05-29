import { ThemeButton, ThemedPanel} from '../component/theme-switts'

import { Spinner } from 'reactstrap';

// Import external modules
import { useState } from "react";

import { gql, useQuery } from "@apollo/client";
import {useRef} from 'react'
import { useThemeContext } from '../context/theme.context';

// Import internal modules
import { BlogListGrid,  BlogListRow } from "../component/posts";

const GET_ALLBLOGS = gql`
query GetAllBlogs {
    posts {
      id
      title
      slug
      body
      image {
        id
        url
      }
      authUser{
        userName
      }
    }
  }
  `

const BlogPage = () => {
    const { isDarkMode } = useThemeContext();
    //const [data, isLoading, error] = useFetch(NEWS_API);
    const [isGridView, setIsGridView] = useState(true);
    const { loading, error, data } = useQuery(GET_ALLBLOGS)

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

    return(
        <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
            <h1>Blog</h1>
            <ThemeButton />
            <ThemedPanel/>
            <div className={`container`}>
            <h1>Blog</h1>
            {loading ? <Spinner>LOADING</Spinner> : null}
            <div>
                <button onClick={() => setIsGridView(!isGridView)}>
                switch
                </button>
                {isGridView && data && <BlogListGrid posts={data.posts} className={`row`} />}
                {!isGridView && data && <BlogListRow posts={data.posts} className={`row`} />} 
            </div>
            </div>
        </div>
    )
    }
    export default BlogPage;