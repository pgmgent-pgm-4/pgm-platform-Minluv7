/* eslint-disable react/prop-types */
// Import custom modules
import React from 'react';
import BlogListGridItem from './blog-list-grid-item';

function BlogListGrid({ posts, className }) {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post) => <BlogListGridItem slug={post.slug} post={post} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" />)}
    </div>
  );
}

export default BlogListGrid;
