import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
import React from 'react';
import { GET_ID_WORKPIECE } from '../graphql';
import { ThemedPanel } from '../component/theme-switts';

import { useThemeContext } from '../context/theme.context';

function WerkstukkenDetailPage() {
  const { isDarkMode } = useThemeContext();
  const { werkstukkenId } = useParams();
  const { loading, error, data } = useQuery(GET_ID_WORKPIECE, {
    variables: { werkstukkenId },
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
      <ThemedPanel />
      {data.workpiece
            && (
            <div>
              {loading ? <Spinner>LOADING</Spinner> : null}
              <h1>{data.workpiece.title}</h1>
              { !!data.workpiece.picture && <img src={data.workpiece.picture.url} className="card-img-top" alt={data.workpiece.title} /> }
              { !data.workpiece.picture && <img src="no-img.jpg" className="card-img-top" alt={data.workpiece.title} /> }
              <p>{data.workpiece.description}</p>
            </div>
            )}
    </div>
  );
}

export default WerkstukkenDetailPage;
