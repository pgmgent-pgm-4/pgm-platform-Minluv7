import { ThemeButton, ThemedPanel } from "../component/theme-switts";
import { useQuery } from "@apollo/client";
import { useRef } from 'react';
import { useThemeContext } from '../context/theme.context';
import { Spinner } from "reactstrap";

import {GET_ALL_AUTHUSERS} from '../graphql'
import './teamPage.css'

import { Link } from "react-router-dom";
import { ROUTES } from '../routes';

const TeamPage = () => {
  const myRef = useRef(0);
  const { isDarkMode } = useThemeContext();
  const handleClick = (ev) => {
    myRef.current++;
  };
  
  
  const { loading, error, data } = useQuery(GET_ALL_AUTHUSERS);

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

  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
     <div className="space__team">
         
      <h1>PGM Team</h1>
      <ThemeButton />
      <ThemedPanel />
      <div className="d-flex flex-wrap gap-3">

     
  {data && data.authUsers.map((user)=>(
  <div className="col" key={user.userName}>
    
   
    {user.person &&
    <>
    
     { !!user.person.avatarUrl &&  <img src={user.person.avatarUrl.url} className="card-img-top " alt="avatar" /> }
       
        <p>{user.person.firstName} {user.person.lastName}</p>
       <p>{user.email}</p>
        <p>{user.person.memberType}</p>
       
    </>
    }
    <Link className="btn btn-primary" to={`${ROUTES.Team}/${user.userName}`}>meer info</Link>
</div>
  )) }
    </div>
    </div>
    </div>
  ) 
}

export default TeamPage;
