

const NavUser = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nese
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profiel</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Uitloggen</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
};

export default NavUser;