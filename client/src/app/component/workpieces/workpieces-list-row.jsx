// Import custom modules
import WorkpiecesListRowItem from "./workpieces-list-row-item";

const WorkpiecesListRow = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post) => <WorkpiecesListRowItem slug={post.slug}  post={post} className={`col-xs-12`} />)}
    </div>
  )
};

export default WorkpiecesListRow;