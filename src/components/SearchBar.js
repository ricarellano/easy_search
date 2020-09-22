import React, { useState } from "react";
import { getData } from "../actions/ActionSearch";
import Card from "./Card";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null);

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
          placeholder=""
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <input className="searchBtn" type="submit" value="Search" />
      </form>
      <div className="cardContainer">
        {filtered !== null ? (
          <Card filtered={filtered} />
        ) : (
          <h4>Everything you want to know in one place.</h4>
        )}
      </div>
    </>
  );
};

export default SearchBar;
