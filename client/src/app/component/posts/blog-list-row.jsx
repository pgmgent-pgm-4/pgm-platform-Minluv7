/* eslint-disable react/prop-types */
// Import custom modules
import React from 'react';
import BlogListRowItem from './blog-list-row-item';

function BlogListRow({ posts, className }) {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post) => <BlogListRowItem slug={post.slug} post={post} className="col-xs-12" />)}
    </div>
  );
}

export default BlogListRow;
