/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
import { WorkpiecesListGrid, WorkpiecesListRow } from '../component/workpieces';
import { ThemedPanel } from '../component/theme-switts';
import { useThemeContext } from '../context/theme.context';
import { GET_ALL_WORKPIECES } from '../graphql';

function WerkstukkenPage() {
  const { isDarkMode } = useThemeContext();
  const [isGridView, setIsGridView] = useState(true);
  const { loading, error, data } = useQuery(GET_ALL_WORKPIECES);

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
      <h1>Werkstukken</h1>

      <ThemedPanel />
      <div className="container">
        {loading ? <Spinner>LOADING</Spinner> : null}
        <button onClick={() => setIsGridView(!isGridView)}>
          switch
        </button>
        {isGridView && data && <WorkpiecesListGrid workpieces={data.workpieces} className="row" />}
        {!isGridView && data && <WorkpiecesListRow workpieces={data.workpieces} className="row" />}
      </div>

    </div>
  );
}

export default WerkstukkenPage;
