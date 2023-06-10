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
      <div class="hero-carousel">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-013.jpg.webp?itok=MP_uSjpX" alt="..." class="d-block w-100 carousel-image border" />
      </div>
      <div class="carousel-item">
        <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-050.jpg.webp?itok=_NqaTz0o" alt="..." class="d-block w-100 carousel-image border" />
      </div>
      <div class="carousel-item">
        <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-030.jpg.webp?itok=JNuj359T" alt="..." class="d-block w-100 carousel-image border" />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
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
