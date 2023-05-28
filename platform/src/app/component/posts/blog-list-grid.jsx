// Import custom modules
import BlogListGridItem from "./blog-list-grid-item";

const BlogListGrid = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post, index) => <BlogListGridItem id={post.id} post={post} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default BlogListGrid;