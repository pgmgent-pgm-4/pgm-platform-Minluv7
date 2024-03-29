/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Import custom modules
import { useEffect, useState } from 'react';
import React, { useQuery } from '@apollo/client';
import WorkpiecesListGridItem from './workpieces-list-grid-item';
import { GET_ALL_WORKPIECES } from '../../graphql';
import { WorkpieceSearch } from '../filters';

function WorkpiecesListGrid({ workpieces, className }) {
  const { loading, error, data } = useQuery(GET_ALL_WORKPIECES);
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
      {filteredDataSt && filteredDataSt.map((workpiece, index) => <WorkpiecesListGridItem title={workpiece.title} workpiece={workpiece} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" />)}

    </div>
  );
}

export default WorkpiecesListGrid;
