/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
import { ThemedPanel } from '../component/theme-switts';
import { ServicesListRow, ServicesListGrid } from '../component/services';
import { useThemeContext } from '../context/theme.context';
import { SocialMedia } from '../component/social';
import { GET_ALL_SERVICES } from '../graphql';

function SercivesPage() {
  const { isDarkMode } = useThemeContext();
  const [isGridView, setIsGridView] = useState(true);
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);

  if (loading) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    );
  }

  if (error) {
    return <p>{error ? error.toString() : error.toString()}</p>;
  }
  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Sercives</h1>
      <ThemedPanel />
      <div />
      {loading ? <Spinner>LOADING</Spinner> : null}
      <button onClick={() => setIsGridView(!isGridView)}>
        switch
      </button>
      {isGridView && data && <ServicesListGrid services={data.services} className="row" />}
      {!isGridView && data && <ServicesListRow services={data.services} className="row" />}
      <SocialMedia />
    </div>
  );
}

export default SercivesPage;
