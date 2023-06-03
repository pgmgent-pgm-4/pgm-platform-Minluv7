import { ThemeButton, ThemedPanel } from "../component/theme-switts"
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
import { EducationProgrammes } from "../component/programme";

import { useThemeContext } from '../context/theme.context';

import {GET_EDUCATION_PROGRAM} from '../graphql'


const ProgrammaDetailPage = () => {
    const { isDarkMode } = useThemeContext();
    const { programmeId} = useParams();
    const { loading, error, data } = useQuery(GET_EDUCATION_PROGRAM, {
      variables: {programmeId}
    });

    if (loading) {
        return (
          <Spinner>
            Loading...
          </Spinner>
        );
      }
    
      if (error){
        return <p>{error ? error.toString(): error.toString()}</p>;
      }

    return(
          <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Programma Details</h1>
      {data.educationProgramme &&
        <article>
            {loading ? <Spinner>LOADING</Spinner> : null}
          <h1>{data.educationProgramme.name}</h1>
          <li>{data.educationProgramme.description}</li>
          <p>{data.educationProgramme.academicYear}</p>
        </article>
      }
    </div>
          
    )
    }
    
    export default ProgrammaDetailPage