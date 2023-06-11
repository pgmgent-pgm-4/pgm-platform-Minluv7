import { Link } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../../routes';
// eslint-disable-next-line react/prop-types
function FirstBlogs({ posts }) {
  return (
    <div className="row">
      <h1>Blogs</h1>
      {posts
          // eslint-disable-next-line react/prop-types
          && posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card">
                <h1 className="card-title">{post.title}</h1>
                {!!post.picture && (
                  <img src={post.picture.url} className="card-img-top" alt="avatar" />
                )}
                {!post.picture && (
                  <img src="no-img.jpg" className="card-img-top" alt="avatar" />
                )}
                {post.tags && (
                  <div className="d-flex">
                    {post.tags.map((tag) => (
                      <p key={tag.id}>
                        #
                        {tag.name}
                      </p>
                    ))}
                  </div>
                )}
                <Link to={`${ROUTES.Blog}/${post.slug}`} className="stretched-link" />
              </div>
            </div>
          ))}
    </div>
  );
}

export default FirstBlogs;
