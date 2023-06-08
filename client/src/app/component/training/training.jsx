import { useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
import { useRef } from 'react';

import {GET_TRAININGS} from '../../graphql'
import './training.css'
const Training = () => {
    
    const { loading, error, data } = useQuery(GET_TRAININGS);
   
    if (loading ) {
        return (
          <Spinner>
            Loading...
          </Spinner>
        );
      }

      if (error ) {
        return <p>{error ? error.toString() : error.toString()}</p>;
      }

      return(
        <div >
 <div className="row">
            {data.trainings.map((training)=>(
                <div className="col-6 ">
                  <h2 className="custom-padding">{training.title}</h2>
                  <p>{training.description}</p>
                </div>
            ))}
        </div> <div className="row">
            {data.trainings.map((training)=>(
                <div className="col-6 ">
                  <h2 className="custom-padding">{training.title}</h2>
                  <p>{training.description}</p>
                </div>
            ))}
        </div>
        </div>
       
      )
}

export default Training