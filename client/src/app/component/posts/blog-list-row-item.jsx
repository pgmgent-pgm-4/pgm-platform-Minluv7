// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const BlogListRowItem = ({slug, post, className}) => {
  return (
    <div className={`${className}`}>
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
          { !!post.picture &&  <img src={post.picture.url} className="card-img-top" alt={post.title} /> }
        { !post.picture &&  <img src={`no-img.jpg`} className="card-img-top" alt={post.title} /> }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.slug}</p>
              <Link className="btn btn-primary" to={`${ROUTES.Blog}/${slug}`}>More info</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
};

export default BlogListRowItem;