// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const WorkpiecesListGridItem = ({ id, workpiece, className}) => {
  return (
    <div className={`${className}`}>
      <article className={`card`}>
        { !!workpiece.picture &&  <img src={workpiece.picture.url} className="card-img-top" alt={workpiece.title} /> }
        { !workpiece.picture &&  <img src={`no-img.jpg`} className="card-img-top" alt={workpiece.title} /> }
       
        <div className="card-body">
          <h5 className="card-title">{workpiece.title}</h5>
          <Link className="btn btn-primary" to={`${ROUTES.Werkstukken}/${id}`}>More info</Link>
        </div>
      </article>
    </div>
  )
};

export default WorkpiecesListGridItem;