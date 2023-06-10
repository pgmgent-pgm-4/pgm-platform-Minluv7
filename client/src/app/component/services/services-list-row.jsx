// Import custom modules
import ServicesListRowItem from "./services-list-row-item";

const ServicesListRow = ({services, className}) => {

 return (
<div className={`${className}`}>
      {services && services.map((service, index) => (
          <ServicesListRowItem id={service.id} service={service} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />
        ))}
    </div>
  )
};

export default ServicesListRow;