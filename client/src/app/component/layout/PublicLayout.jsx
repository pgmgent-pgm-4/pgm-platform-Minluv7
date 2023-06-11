/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';

import React from 'react';

function PublicLayout({
  children,
  ...rest
}) {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default PublicLayout;
