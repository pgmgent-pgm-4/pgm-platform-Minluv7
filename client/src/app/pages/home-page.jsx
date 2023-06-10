import { ThemedPanel } from "../component/theme-switts";
import {FirstTraining, FirstBlogs} from '../component/home'
import { useThemeContext } from '../context/theme.context';
import { useQuery } from "@apollo/client";
import {FIRST_TRAINING, FIRST_BLOGS} from '../graphql'
import { Spinner } from "reactstrap";



const HomePage = () => {
  const { isDarkMode } = useThemeContext();
  const { loading, error, data } = useQuery(FIRST_TRAINING);
  const {loading: lead, error: err, data: dat} = useQuery (FIRST_BLOGS)

  if (loading || lead) { 
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  if (error || err){
    return <p>{error ? error.toString(): err.toString()}</p>;
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
      <FirstTraining trainings={data.trainings} />
      <FirstBlogs posts={dat.posts}/>
    </div>
  ) 
}

export default HomePage;
