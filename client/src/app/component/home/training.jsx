import { Spinner } from "reactstrap";
import { useQuery } from "@apollo/client";
import {FIRST_TRAINING} from '../../graphql'

const FirstTraining = ({trainings}) => {
    const { loading, error, data } = useQuery(FIRST_TRAINING);

    if (loading) {
      return (
        <Spinner>
          Loading...
        </Spinner>
      );
    }
  
    if (error) {
      return <p>{error ? error.toString() : error.toString()}</p>;
    }
    return(
        <div>
            {trainings && trainings.map((training =>
            <div className="container col jumbotron" id={training.id}>
                <div>
                <h1>{training.title}</h1>
                <p className="lead">{training.description}</p>
            </div>
            </div>
            ))
            }
        </div>
    )
}

export default FirstTraining;