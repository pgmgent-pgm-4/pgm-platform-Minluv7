import { useQuery } from '@apollo/client';
import React from 'react';
import { Spinner } from 'reactstrap';
import { useThemeContext } from '../context/theme.context';
import { ThemedPanel } from '../component/theme-switts';
import { EducationProgrammes } from '../component/programme';
import { SocialMedia } from '../component/social';
import { GETALLEDUCATIONPROGRAMME } from '../graphql';

function ProgrammaPage() {
  const { isDarkMode } = useThemeContext();

  const { loading, error, data } = useQuery(GETALLEDUCATIONPROGRAMME);

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
      {loading ? <Spinner>LOADING</Spinner> : null}

      <EducationProgrammes educationProgrammes={data.educationProgrammes} />
      <SocialMedia />
    </div>
  );
}

export default ProgrammaPage;
