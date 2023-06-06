import { ThemedPanel } from "../component/theme-switts"
import {  useQuery } from "@apollo/client";

import { useThemeContext } from '../context/theme.context';
import { Spinner } from "reactstrap";
import { EducationProgrammes } from "../component/programme";
import {GETALLEDUCATIONPROGRAMME} from '../graphql'


const ProgrammaPage = () => {
    const { isDarkMode } = useThemeContext();
    
    const { loading, error, data } = useQuery(GETALLEDUCATIONPROGRAMME)

    if (loading) { 
        return (
          <Spinner>
            Loading...
          </Spinner>
        );
      }
    
      if (error ){
        return <p>{error ? error.toString(): error.toString()}</p>;
      }
    
    return(
        <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
            
            <ThemedPanel/>
            {loading ? <Spinner>LOADING</Spinner> : null}
           
            <EducationProgrammes educationProgrammes={data.educationProgrammes} />
        </div>
    )
    }
    
    export default ProgrammaPage