// Import custom modules
import NavBar from "./navbar";
import NavUser from "./nav-user";


const Header = () => {
  return (
<header className="header navbar navbar-expand-lg bd-navbar sticky-top">
      <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="w-100 d-flex flex-column flex-lg-row justify-content-lg-between">
            <NavBar />
            <NavUser className="d-flex" />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;