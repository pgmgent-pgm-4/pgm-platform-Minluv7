// Import custom modules
import WorkpiecesListGridItem from "./workpieces-list-grid-item";

const WorkpiecesListGrid = ({workpieces, className}) => {
  return (
    <div className={`${className}`}>
      {workpieces && workpieces.map((workpiece, index) => <WorkpiecesListGridItem id={workpiece.id} workpiece={workpiece} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default WorkpiecesListGrid;