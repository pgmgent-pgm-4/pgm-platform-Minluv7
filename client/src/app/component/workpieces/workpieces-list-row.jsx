/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// Import custom modules
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import WorkpiecesListRowItem from './workpieces-list-row-item';
import { GET_ALL_WORKPIECES } from '../../graphql';
import { WorkpieceSearch } from '../filters';

function WorkpiecesListRow({ className }) {
  const { data } = useQuery(GET_ALL_WORKPIECES);
  const [filteredDataSt, setFilteredDataSt] = useState([]);
  useEffect(() => {
    setFilteredDataSt(data.workpieces);
    console.log(data.workpieces);
  }, [data]);

  const handleSearch = (searchStr) => {
    setFilteredDataSt(data.workpieces.filter((p) => p.title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1));
  };
  return (
    <div className={`${className}`}>
      <WorkpieceSearch onSearch={handleSearch} />
      {filteredDataSt && filteredDataSt.map((workpiece) => (
        <WorkpiecesListRowItem title={workpiece.title} workpiece={workpiece} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" />
      ))}
    </div>
  );
}

export default WorkpiecesListRow;
