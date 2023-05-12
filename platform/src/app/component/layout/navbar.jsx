// Import external modules
import { Link } from 'react-router-dom';

// Import internal modules
import { ROUTES } from '../../routes';

const NavBar = () => {
  return (
    <>
    <nav className={``}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.Home}>Home</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.Opleiding}>Opleiding</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Programma}>Programma</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Werkstukken}>werkstukken</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Blog}>Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Services}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Team}>Team</Link>
        </li>
      </ul>
    </nav>
    </>
  )
};

export default NavBar;