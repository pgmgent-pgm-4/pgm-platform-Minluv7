// Import external modules
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown, Button,
} from 'reactstrap';
import React from 'react';
// Import custom modules
import { ROUTES } from '../../routes';
import { useAuth } from '../../context/auth.context';

function UserContextNavigation() {
  const { currentUser, signOut } = useAuth();

  return (
    <div>
      {currentUser
        ? (
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              {!!currentUser
                && (
                <span className="user">
                  <span className="user__avatar" />
                  <span className="user__username">{currentUser.userName}</span>
                </span>
                )}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink tag={RRNavLink} to={ROUTES.USER}>Dashboard</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={RRNavLink} to={ROUTES.USER_PROFILE}>Profile</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Button onClick={signOut}>Sign out</Button>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )
        : (
          <>
            <NavItem>
              <NavLink tag={RRNavLink} to={ROUTES.AUTH_SIGN_IN}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to={ROUTES.AUTH_SIGN_UP}>Sign Up</NavLink>
            </NavItem>
          </>
        )}
    </div>
  );
}

export default UserContextNavigation;
