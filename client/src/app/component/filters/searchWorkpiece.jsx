/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Label } from 'reactstrap';

function WorkpieceSearch({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = (ev) => {
    const txt = ev.currentTarget.value;
    setSearch(txt);

    if (typeof onSearch === 'function') {
      onSearch(txt);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <Label htmlFor="txtSearch" className="form-label">Search</Label>
          <input type="text" className="form-control" id="txtSearch" aria-describedby="emailHelp" onChange={(ev) => handleSearch(ev)} />
          <div id="emailHelp" className="form-text">Write your search here.</div>
        </div>
      </form>
    </div>
  );
}

export default WorkpieceSearch;
