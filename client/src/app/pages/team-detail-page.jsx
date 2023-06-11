import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';

import { useThemeContext } from '../context/theme.context';

import { GET_AUTHUSER } from '../graphql';

function TeamDetailPage() {
  const { isDarkMode } = useThemeContext();
  const { teamId } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHUSER, {
    variables: { teamId },
  });

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
      <h1>team Details</h1>
      { data.authUser

        && (
        <div className="container">
          {loading ? <Spinner>LOADING</Spinner> : null}

          <p>{data.authUser.email}</p>
        </div>
        )}
    </div>

  );
}

export default TeamDetailPage;
