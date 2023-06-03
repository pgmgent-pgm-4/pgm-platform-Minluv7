import { ThemeButton, ThemedPanel } from "../component/theme-switts"
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useThemeContext } from '../context/theme.context';
import { Spinner } from "reactstrap";
import { EducationProgrammes } from "../component/programme";
import {GETALLEDUCATIONPROGRAMME} from '../graphql'


const ProgrammaPage = () => {
    const { isDarkMode } = useThemeContext();
    const [isGridView, setIsGridView] = useState(true);
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
            <h1>Programma</h1>
            <ThemeButton />
            <ThemedPanel/>
            {loading ? <Spinner>LOADING</Spinner> : null}
            <button onClick={() => setIsGridView(!isGridView)}>
                switch
            </button>
            <EducationProgrammes educationProgrammes={data.educationProgrammes} />
        </div>
    )
    }
    
    export default ProgrammaPage