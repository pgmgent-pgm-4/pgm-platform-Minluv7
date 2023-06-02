// Import custom modules
import BlogListRowItem from "./blog-list-row-item";

const BlogListRow = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post) => <BlogListRowItem slug={post.slug}  post={post} className={`col-xs-12`} />)}
    </div>
  )
};

export default BlogListRow;