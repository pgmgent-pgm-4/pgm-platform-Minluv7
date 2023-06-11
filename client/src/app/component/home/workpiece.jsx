import { Link } from "react-router-dom";
import { ROUTES } from '../../routes';
const FirstWorkpieces = ({ workpieces }) => {
    return (
      <div className="row d-flex justify-content-center">
        <h1>Werkstukken</h1>
        {workpieces &&
          workpieces.map((workpiece) => (
            <div className="col-md-4" key={workpiece.id}>
              <div className="card">
                <h1 className="card-title">{workpiece.title}</h1>
                {!!workpiece.picture && (
                  <img src={workpiece.picture.url} className="card-img-top" alt="avatar" />
                )}
                {!workpiece.picture && (
                  <img src="no-img.jpg" className="card-img-top" alt="avatar" />
                )}
            <p>{workpiece.description}</p>
                <Link to={`${ROUTES.Werkstukken}`} className="stretched-link" />
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default FirstWorkpieces;
  