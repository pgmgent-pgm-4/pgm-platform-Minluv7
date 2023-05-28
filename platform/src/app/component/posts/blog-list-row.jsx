// Import custom modules
import BlogListRowItem from "./blog-list-row-item";

const BlogListRow = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post, index) => <BlogListRowItem key={index} id={index} post={post} className={`col-xs-12`} />)}
    </div>
  )
};

export default BlogListRow;