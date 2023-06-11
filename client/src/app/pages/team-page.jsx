import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { ThemedPanel } from '../component/theme-switts';
import { useThemeContext } from '../context/theme.context';
import { GET_ALL_AUTHUSERS } from '../graphql';
import './teamPage.css';
import { TeamRadio } from '../component/filters';
import { ROUTES } from '../routes';

function TeamPage() {
  const { isDarkMode } = useThemeContext();

  const [filteredDataSt, setFilteredDataSt] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_AUTHUSERS);

  useEffect(() => {
    if (data && data.authUsers) {
      setFilteredDataSt(data.authUsers);
      console.log(data.authUsers);
    }
  }, [data]);

  const handleSelect = (selectStr) => {
    // console.log(data.authUsers.filter(p => p.person.memberType === selectStr))
    setFilteredDataSt(data.authUsers.filter((p) => p.person.memberType === selectStr));
  };

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
      <div className="space__team">
        <h1>PGM Team</h1>
        <ThemedPanel />
        <div className="d-flex flex-wrap gap-3">

          <TeamRadio onChange={handleSelect} />

          {filteredDataSt && filteredDataSt.map((user) => (
            <div className="col" key={user.userName}>
              {user.person && (
                <>
                  {!!user.person.picture && (
                    <img src={user.person.picture.url} className="card-img-top" alt="avatar" />
                  )}
                  {!user.person.picture && (
                    <img src="no-img.jpg" className="card-img-top" alt="avatar" />
                  )}
                  <p>
                    {user.person.firstName}
                    {' '}
                    {user.person.lastName}
                  </p>
                  <p>{user.email}</p>
                  <p>{user.person.memberType}</p>
                </>
              )}
              <Link className="btn btn-primary" to={`${ROUTES.Team}/${user.userName}`}>meer info</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TeamPage;
