import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';

const EducationProgrammes = ({id, educationProgrammes}) => {

  return (
    <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`}>
    <div className={`row`}>
      {educationProgrammes && educationProgrammes.map((program => 

    <div className={` card`} id={program.id}>
     
      <div className="card-body">
        <h5 className="card-title">{program.name}</h5>
        <p className="card-text">{program.description}</p>
        <p>{program.academicYear}</p>
       <Link className="btn btn-primary" to={`${ROUTES.Programma}/${program.id}`}>meer info</Link>
        
      </div>
      <div className="card-body">
       
      </div>
    </div>
         ))}
         </div>
       </div>
  )

};

export default EducationProgrammes;