import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spinner } from 'reactstrap';

import { useThemeContext } from '../context/theme.context';

import { GET_EDUCATION_PROGRAM } from '../graphql';

function ProgrammaDetailPage() {
  const { isDarkMode } = useThemeContext();
  const { programmeId } = useParams();
  const { loading, error, data } = useQuery(GET_EDUCATION_PROGRAM, {
    variables: { programmeId },
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

      {data.educationProgramme
        && (
        <article>
          {loading ? <Spinner>LOADING</Spinner> : null}
          <h1>{data.educationProgramme.name}</h1>
          <h2>{data.educationProgramme.description}</h2>
          <p>{data.educationProgramme.academicYear}</p>
          {data.educationProgramme.courses && (
          <div>
            {data.educationProgramme.courses.map((course) => (
              <div key={course.id} className="container col">
                <p>{course.name}</p>
                <p>{course.semester}</p>
                <p>{course.period}</p>
                <p>{course.studypoints}</p>
                <Link className="" to={course.ectsFiches}>EctsFiches</Link>
              </div>
            ))}
          </div>
          )}

        </article>
        )}
    </div>

  );
}

export default ProgrammaDetailPage;
