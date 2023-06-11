/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */

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
          <div className="row m-2 d-flex justify-content-center">
            {data.educationProgramme.courses.map((course) => (
              <div key={course.id} className="card col-sm-3 m-1">
                <h3>{course.name}</h3>
                <p>{course.semester}</p>
                <p>{course.period}</p>
                <p>Studiepunten: {course.studypoints}</p>
                <Link className="btn btn-outline-primary" to={course.ectsFiches}>EctsFiches</Link>
                {course.programmeLine && (
                    <div style={{ backgroundColor: course.programmeLine.colorCode }}>
                      <h4>{course.programmeLine.name}</h4>
                      <p>{course.programmeLine.descriptoin}</p>
                    </div>
                  )}
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
