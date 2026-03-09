import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, projectCount }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="search-clear-btn"
            onClick={() => onSearchChange('')}
          >
            &times;
          </button>
        )}
      </div>
      <div className="search-results-count">
        {projectCount} {projectCount === 1 ? 'project' : 'projects'} found
      </div>
    </div>
  );
};

export default SearchBar;
