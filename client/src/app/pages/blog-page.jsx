/* eslint-disable react/button-has-type */
import { Spinner } from 'reactstrap';
// Import external modules
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ThemedPanel } from '../component/theme-switts';
import { SocialMedia } from '../component/social';
// Import internal modules
import { BlogListGrid, BlogListRow, PostsListRelayCursor } from '../component/posts';
import { useThemeContext } from '../context/theme.context';
import { GET_ALLBLOGS } from '../graphql';

function BlogPage() {
  const { isDarkMode } = useThemeContext();
  const [isGridView, setIsGridView] = useState(true);
  const { loading, error, data } = useQuery(GET_ALLBLOGS);

  if (loading) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  if (error) {
    return <p>{error ? error.toString() : error.toString()}</p>;
  }

  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Blog</h1>
      <ThemedPanel />
      <div className="container">
        {loading ? <Spinner>LOADING</Spinner> : null}
        <div>
          <button onClick={() => setIsGridView(!isGridView)}>
            switch
          </button>
          {isGridView && data && <BlogListGrid posts={data.posts} className="row" />}
          {!isGridView && data && <BlogListRow posts={data.posts} className="row" />}
          <PostsListRelayCursor />
          <SocialMedia />
        </div>
      </div>

    </div>
  );
}
export default BlogPage;
