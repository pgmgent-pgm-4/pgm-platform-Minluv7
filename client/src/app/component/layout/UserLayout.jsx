/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../context';
import { ROUTES } from '../../routes';

function UserLayout({
  children,
  ...rest
}) {
  const { currentUser } = useAuth();

  return (
    currentUser
      ? <Outlet />
      : <Navigate to={ROUTES.AUTH_SIGN_IN} />
  );
}

export default UserLayout;
