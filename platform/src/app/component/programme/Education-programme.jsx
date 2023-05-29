
const EducationProgrammes = ({educationProgrammes}) => {

  return (
    <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`}>
    <div className={`row`}>
      {educationProgrammes && educationProgrammes.map((program => 

    <div className={` card`} key={program.id}>
     
      <div className="card-body">
        <h5 className="card-title">{program.name}</h5>
        <p className="card-text">{program.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
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