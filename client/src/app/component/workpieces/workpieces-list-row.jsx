// Import custom modules
import WorkpiecesListRowItem from "./workpieces-list-row-item";

const WorkpiecesListRow = ({workpieces, className}) => {
  return (
    <div className={`${className}`}>
      {workpieces && workpieces.map((workpiece, index) => <WorkpiecesListRowItem id={workpiece.id} workpiece={workpiece} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default WorkpiecesListRow;