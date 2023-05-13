
const NavUser = () => {
  return (
    <div className={``}>
      <ul className="navbar navbar-expand-lg bg-body-tertiary">
        <li className="nav-item">
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