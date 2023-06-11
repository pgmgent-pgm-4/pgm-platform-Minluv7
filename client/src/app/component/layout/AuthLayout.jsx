/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import React from 'react';

function AuthLayout({
  children,
  ...rest
}) {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AuthLayout;
