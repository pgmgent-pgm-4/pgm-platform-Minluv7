/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';

import { ThemedPanel } from '../component/theme-switts';
import {
  FirstTraining, FirstBlogs, FirstServices, FirstWorkpieces,
} from '../component/home';
import { useThemeContext } from '../context/theme.context';
import { SocialMedia } from '../component/social';
import {
  FIRST_TRAINING, FIRST_BLOGS, FIRST_SERVICES, FIRST_WORKPIECE,
} from '../graphql';

function HomePage() {
  const { isDarkMode } = useThemeContext();
  const { loading, error, data } = useQuery(FIRST_TRAINING);
  const { loading: lead, error: err, data: dat } = useQuery(FIRST_BLOGS);
  const { loading: servicesLoading, error: servicesError, data: servicesData } = useQuery(FIRST_SERVICES);
  const { loading: workpieceLoading, error: workpieceError, data: workpieceData } = useQuery(FIRST_WORKPIECE);

  if (loading || lead) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }
  if (servicesLoading) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }
  if (workpieceLoading) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }
  if (error || err) {
    return <p>{error ? error.toString() : err.toString()}</p>;
  }

  if (servicesError) {
    return <p>{servicesError ? servicesError.toString() : servicesError.toString()}</p>;
  }

  if (workpieceError) {
    return <p>{workpieceError ? workpieceError.toString() : workpieceError.toString()}</p>;
  }

  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Home</h1>
      <ThemedPanel />
      <div className="hero-carousel">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-013.jpg.webp?itok=MP_uSjpX" alt="..." className="d-block w-100 carousel-image border" />
            </div>
            <div className="carousel-item">
              <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-050.jpg.webp?itok=_NqaTz0o" alt="..." className="d-block w-100 carousel-image border" />
            </div>
            <div className="carousel-item">
              <img src="https://ahscdn.be/sites/default/files/styles/content_image_fluid_md_2x/public/2023-03/pgm-030.jpg.webp?itok=JNuj359T" alt="..." className="d-block w-100 carousel-image border" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <FirstTraining trainings={data.trainings} />
      <FirstBlogs posts={dat.posts} />
      <FirstServices services={servicesData.services} />
      <FirstWorkpieces workpieces={workpieceData.workpieces} />
      <SocialMedia />
    </div>
  );
}

export default HomePage;
