// Import custom modules
import NavBar from "./navbar";
import NavUser from "./nav-user";


const Header = () => {
  return (
    <header className="header navbar navbar-expand-lg bd-navbar sticky-top">
      <div className="container-fluid">
        <div className="">
            <NavBar />
            <NavUser />
        </div>
      </div>
    </header>
  )
};

export default Header;