/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function WorkpieceSearch({ onSearch }) {
  const [setSearch] = useState('');

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
          <label htmlFor="txtSearch" className="form-label">Search</label>
          <input type="text" className="form-control" id="txtSearch" aria-describedby="emailHelp" onChange={(ev) => handleSearch(ev)} />
          <div id="emailHelp" className="form-text">Write your search here.</div>
        </div>
      </form>
    </div>
  );
}

export default WorkpieceSearch;
