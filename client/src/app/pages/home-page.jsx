import { ThemedPanel } from "../component/theme-switts";
import { useQuery } from "@apollo/client";
import { useRef } from 'react';
import { useThemeContext } from '../context/theme.context';
import { Spinner } from "reactstrap";

import {GET_AUTHUSER, GET_ALLAUTHUSER} from '../graphql'

const HomePage = () => {
  const myRef = useRef(0);
  const { isDarkMode } = useThemeContext();
  const handleClick = (ev) => {
    myRef.current++;
  };
  const userId = "Minluv";
  
  const { loading, error, data } = useQuery(GET_AUTHUSER, {
    variables: {
      where: {
        userName: `${userId}`,
      },
    },
  });
  
  const { loading: load, error: er, data: datas } = useQuery(GET_ALLAUTHUSER);

  if (loading || load) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  if (error || er) {
    return <p>{error ? error.toString() : er.toString()}</p>;
  }

  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Home</h1>
      <ThemedPanel />
  {datas && datas.authUsers.map((user)=>(
  <div className="container" key={user.userName}>
    <p>{user.userName}</p>
    <p>{user.email}</p>
   
</div>
  )) }

      {data && data.authUser && (
        <div className="container">
          <p>{data.authUser.userName}</p>
          <p>{data.authUser.email}</p>
        </div>
      )}
    </div>
  ) 
}

export default HomePage;
