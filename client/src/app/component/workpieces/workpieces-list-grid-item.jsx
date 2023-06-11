/* eslint-disable react/prop-types */
// Import custom modules
import { Link } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../../routes';

function WorkpiecesListGridItem({ workpiece, className }) {
  return (
    <div className={`${className}`}>

      <article className="card">

        { !!workpiece.picture && <img src={workpiece.picture.url} className="card-img-top" alt={workpiece.title} /> }
        { !workpiece.picture && <img src="no-img.jpg" className="card-img-top" alt={workpiece.title} /> }

        <div className="card-body">
          <h3 className="card-title">{workpiece.title}</h3>
          <Link className="btn btn-primary" to={`${ROUTES.Werkstukken}/${workpiece.title}`}>More info</Link>
        </div>
      </article>
    </div>
  );
}

export default WorkpiecesListGridItem;
