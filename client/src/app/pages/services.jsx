import { ThemeButton, ThemedPanel } from "../component/theme-switts"
import { ServicesListRow, ServicesListGrid } from "../component/services"
import { useState} from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from 'reactstrap';
import { useThemeContext } from '../context/theme.context';
import { GET_ALL_SERVICES } from "../graphql";
const SercivesPage = () => {
  const { isDarkMode } = useThemeContext();
    const [isGridView, setIsGridView] = useState(true);
    const { loading, error, data } = useQuery(GET_ALL_SERVICES)
    
   

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
        <h1>Sercives</h1>
            <ThemedPanel/>
            <div>
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
            </div>
            {loading ? <Spinner>LOADING</Spinner> : null}
        <button onClick={() => setIsGridView(!isGridView)}>
                switch
        </button>
        {isGridView && data && <ServicesListGrid services={data.services} className={`row`} />}
        {!isGridView && data && <ServicesListRow services={data.services} className={`row`} />} 
        </div>
    )
    }
    
    export default SercivesPage