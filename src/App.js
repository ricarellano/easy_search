import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <header>
        <h1>Easy Search</h1>
        <p>Everything you want to know in one place</p>
      </header>
      <main>
        <SearchBar />
      </main>
    </>
  );
}

export default App;
