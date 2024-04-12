import React, { useState } from "react";
import SearchIcon from "@rsuite/icons/Search";
import FunnelIcon from "@rsuite/icons/Funnel";
import { useMediaQuery } from "../customhooks";
import Search from "./Search";
import { useData } from "../context/data.context";
import Filter from "./Filter";

export default function Navbar({ searchStr, setSearchStr }) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [showSearch, setShowSearch] = useState(false);
  const { btnClick, setBtnClick } = useData();

  const handleSearchResult = () => {
    setBtnClick((prevState) => !prevState);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchStr = (ev) => {
    setSearchStr(ev.target.value);
  };
  return (
    <>
      <div className="Nav-container">
        <div className="logo-container">
          <img id="logo" src="/logo.png" alt="icon.png" />
        </div>
        <div className="Nav-list">
          <ul className="list-container">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
          </ul>
        </div>
        <div className={isMobile ? "none" : "search-box"}>
          <div className="search-input">
            <input
              id="input-city"
              placeholder="Enter any city/locations..."
              onChange={handleSearchStr}
              value={searchStr}
            ></input>
          </div>
          <div className="search">
            <button id="search-btn" onClick={handleSearchResult}>
              {" "}
              Search
            </button>
          </div>
          <div className="filter">
            <FunnelIcon
              id="filter-icon"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
        <div className="search-toggle" onClick={handleSearchToggle}>
          <SearchIcon id="search-icon" />
        </div>
        <div className="clock"></div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Filter />
      </div>

      <Search
        showSearch={showSearch}
        searchStr={searchStr}
        handleSearchStr={handleSearchStr}
        handleSearchResult={handleSearchResult}
      />
    </>
  );
}
