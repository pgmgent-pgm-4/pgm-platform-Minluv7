import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
import { GET_ID_SERVICE } from '../graphql/queries';
import { useThemeContext } from '../context/theme.context';
import { ThemedPanel } from '../component/theme-switts';

function SercivesDetailPage() {
  const { isDarkMode } = useThemeContext();
  const { serviceId } = useParams();
  const { loading, error, data } = useQuery(GET_ID_SERVICE, {
    variables: { serviceId },
  });
  console.log(serviceId);

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
      {data.service
            && (
            <div>
              {loading ? <Spinner>LOADING</Spinner> : null}
              <h1>{data.service.title}</h1>
              { !!data.service.picture && <img src={data.service.picture.url} className="card-img-top" alt={data.service.title} /> }
              { !data.service.picture && <img src="no-img.jpg" className="card-img-top" alt={data.service.title} /> }
              {data.service.body.markdown}
            </div>
            )}
    </div>
  );
}

export default SercivesDetailPage;
