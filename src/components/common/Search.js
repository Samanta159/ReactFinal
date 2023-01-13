import React from "react";

const Search = (props) => {
  return (
    <div className="col-md-6">
      <div className="active-cyan-4 mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={(e) => {
            props.searchName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
