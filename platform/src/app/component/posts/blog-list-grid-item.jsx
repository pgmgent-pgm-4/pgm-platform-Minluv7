// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const BlogListGridItem = ({id, post, className}) => {
  return (
    <div className={`${className}`}>
      <article className={`card`}>
        <img src={post.img} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.slug}</p>
          <Link className="btn btn-primary" to={`${ROUTES.Blog}/${id}`}>More info</Link>
        </div>
      </article>
    </div>
  )
};

export default BlogListGridItem;