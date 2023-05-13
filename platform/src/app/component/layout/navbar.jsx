// Import external modules
import { Link } from 'react-router-dom';

// Import internal modules
import { ROUTES } from '../../routes';

const NavBar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg bg-body-tertiary card text-center card-header d-flex'>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to={ROUTES.Home}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={ROUTES.Opleiding}>Opleiding</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={ROUTES.Programma}>Programma</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={ROUTES.Werkstukken}>Werkstukken</Link>
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
        <ul className="dropdown-menu nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            <li> 
            <Link className="dropdown-item">Test</Link>
            </li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </nav>
    </>
  )
};

export default NavBar;