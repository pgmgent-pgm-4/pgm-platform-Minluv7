// Import custom modules
import { Link } from "react-router-dom";
import { ROUTES } from '../../routes';

import {GET_ALL_WORKPIECES} from '../../graphql'
import { useEffect, useState } from "react";
import {  useQuery } from "@apollo/client";


const WorkpiecesListGridItem = ({ workpiece, className}) => {
  const { loading, error, data } = useQuery(GET_ALL_WORKPIECES)
  const [filteredDataSt, setFilteredDataSt] = useState([])


  return (
    <div className={`${className}`}>
      
      <article className={`card`}>
     
        { !!workpiece.picture &&  <img src={workpiece.picture.url} className="card-img-top" alt={workpiece.title} /> }
        { !workpiece.picture &&  <img src={`no-img.jpg`} className="card-img-top" alt={workpiece.title} /> }
       
        <div className="card-body">
          <h3 className="card-title">{workpiece.title}</h3>
          <Link className="btn btn-primary" to={`${ROUTES.Werkstukken}/${workpiece.title}`}>More info</Link>
        </div>
      </article>
    </div>
  )
};

export default WorkpiecesListGridItem;