import {  ThemedPanel } from "../component/theme-switts"
import { WorkpiecesListGrid, WorkpiecesListRow } from "../component/workpieces"
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from 'reactstrap';
import {GET_ALLBLOGS} from '../graphql'
const WerkstukkenPage = () => {
    const [isGridView, setIsGridView] = useState(true);
    const { loading, error, data } = useQuery(GET_ALLBLOGS)
    
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
        <>
        <h1>Werkstukken</h1>
        <ThemedPanel/>
        <button onClick={() => setIsGridView(!isGridView)}>
                switch
        </button>
        {isGridView && data && <WorkpiecesListGrid posts={data.posts} className={`row`} />}
        {!isGridView && data && <WorkpiecesListRow posts={data.posts} className={`row`} />} 
        </>
    )
    }
    
    export default WerkstukkenPage