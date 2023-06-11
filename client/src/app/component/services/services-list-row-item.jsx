// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const ServicesListRowItem = ({ service, className}) => {
  return (
    <div className={`${className}`}>
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
          { !!service.picture &&  <img src={service.picture.url} className="card-img-top" alt={service.title} /> }
        { !service.picture &&  <img src={`no-img.jpg`} className="card-img-top" alt={service.title} /> }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <Link className="btn btn-primary" to={`${ROUTES.Services}/${service.id}`}>More info</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
};

export default ServicesListRowItem;