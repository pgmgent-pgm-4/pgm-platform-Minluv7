import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ProgrammaRadio } from '../filters';
import { ROUTES } from '../../routes';
import { GETALLEDUCATIONPROGRAMME } from '../../graphql';

import '../../_sass/main.scss';

function EducationProgrammes() {
  const { data } = useQuery(GETALLEDUCATIONPROGRAMME);

  const [filteredDataSt, setFilteredDataSt] = useState([]);
  useEffect(() => {
    if (data && data.educationProgrammes) {
      setFilteredDataSt(data.educationProgrammes);
      console.log(data.educationProgrammes);
    }
  }, [data]);

  const handleSelect = (selectStr) => {
  // console.log(data.authUsers.filter(p => p.person.memberType === selectStr))
    setFilteredDataSt(data.educationProgrammes.filter((p) => p.description === selectStr));
  };

  return (

    <div className="d-flex row justify-content-center align-items-center my-auto">
      <ProgrammaRadio onChange={handleSelect} />
      <div className="d-flex flex-wrap gap-3 p-4">

        {filteredDataSt && filteredDataSt.map(((program) => (
          <div className="container col" id={program.id}>

            <div className="background-card">
              <h5 className="card-title">{program.name}</h5>
              <p className="card-text">{program.description}</p>
              <p>{program.academicYear}</p>
              <Link className="btn btn-primary custom-button" to={`${ROUTES.Programma}/${program.id}`}>meer info</Link>

            </div>
            <div className="card-body" />
          </div>
        )
        ))}
      </div>
    </div>
  );
}

export default EducationProgrammes;
