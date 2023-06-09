// Import custom modules
import WorkpiecesListGridItem from "./workpieces-list-grid-item";

const WorkpiecesListGrid = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post, index) => <WorkpiecesListGridItem slug={post.slug} post={post} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default WorkpiecesListGrid;