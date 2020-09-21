import React, { useState, useEffect } from "react";
import {getData} from "../actions/ActionSearch";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null);
  console.log(filtered)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFiltered(getData(search)); 
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <input className="searchBtn" type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchBar;
