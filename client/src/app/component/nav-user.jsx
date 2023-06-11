/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Nav } from 'reactstrap';
import { useUserContext } from '../context/user.context';
import { UserContextNavigation } from './auth';

function NavUser() {
  const { user, logIn, logOut } = useUserContext();

  return (

    <div className="nav-user">

      {user
        && (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.avatarUrl} className="avatar" />
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => logOut()}>Logoff</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        )}
      {!user
        && (
        <button onClick={() => logIn()}>Login</button>
        )}
      <Nav>
        <UserContextNavigation />
      </Nav>
    </div>
  );
}

export default NavUser;
