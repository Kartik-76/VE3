import React, { useState } from 'react';
import {Navigate } from 'react-router-dom';


const ModuleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [redirectToModule, setRedirectToModule] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const matchedModules = ['module_one', 'module_two', 'module_three', 'module_four', 'module_five'].filter((module) =>
      module.includes(searchTerm.toLowerCase())
    );
    if (matchedModules.length === 1) {
      setRedirectToModule(matchedModules[0]);
    } else {
      alert('No module found matching your search term.');
    }
  };

  if (redirectToModule) {
    return <Navigate to={`/modules/${redirectToModule}`} />;
  }

  return (
    <form onSubmit={handleSearchSubmit} className="d-flex" role="search">
        <input className="form-control me-2" type="text" id="searchInput" value={searchTerm} onChange={handleSearchInputChange}  placeholder="Search Module" aria-label="Search"/>
        <button className="btn btn-outline-primary px-5" type="submit">Search</button>
      </form>
  );
};

export default ModuleSearch;
