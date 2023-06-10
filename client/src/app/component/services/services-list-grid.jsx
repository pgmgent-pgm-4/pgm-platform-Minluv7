// Import custom modules
import ServicesListGridItem from "./services-list-grid-item";

const ServicesListGrid = ({ services, className}) => {

  return (
    <div className={`${className}`}>
      {services && services.map((service, index) => <ServicesListGridItem title={service.title} service={service} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default ServicesListGrid;