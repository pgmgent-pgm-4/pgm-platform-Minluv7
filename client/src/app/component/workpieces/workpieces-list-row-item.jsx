/* eslint-disable react/prop-types */
// Import custom modules
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes';

function WorkpiecesListRowItem({ workpiece, className }) {
  return (
    <div className={`${className}`}>
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            { !!workpiece.picture && <img src={workpiece.picture.url} className="card-img-top" alt={workpiece.title} /> }
            { !workpiece.picture && <img src="no-img.jpg" className="card-img-top" alt={workpiece.title} /> }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{workpiece.title}</h5>
              <Link className="btn btn-primary" to={`${ROUTES.Werkstukken}/${workpiece.title}`}>More info</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default WorkpiecesListRowItem;
