// Import custom modules
import { Link } from "react-router-dom";
import { ROUTES } from '../../routes';

const ServicesListGridItem = ({ service, className}) => {

  return (
    <div className={`${className}`}>
      
      <article className={`card`}>
     
        { !!service.picture &&  <img src={service.picture.url} className="card-img-top" alt={service.title} /> }
        { !service.picture &&  <img src={`no-img.jpg`} className="card-img-top" alt={service.title} /> }
       
        <div className="card-body">
          <h3 className="card-title">{service.title}</h3>
          <p>{service.synopsis}</p>
          <Link className="btn btn-primary" to={`${ROUTES.Services}/${service.id}`}>More info</Link>
        </div>
      </article>
    </div>
  )
};

export default ServicesListGridItem;