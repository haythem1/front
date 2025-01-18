import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => onSearch(e.target.value);

  return (
    <input  className="form-control" type="text" placeholder="Recherche" onChange={handleSearch} />
  );
}

export default SearchBar;
