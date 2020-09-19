import React from "react";

const Search = (props) => {
  return (
    <div className="search-contener">
      <input
        onChange={(event) => {
          props.update(event.target.value);
        }}
        type="text"
        className="input"
        placeholder="city"
      />
      <div className="btn" onClick={() => props.fetch()}>
        Search
      </div>
    </div>
  );
};
export default Search;
