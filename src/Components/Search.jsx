import React from "react";
import FunnelIcon from "@rsuite/icons/Funnel";

export default function Search({
  showSearch,
  searchStr,
  handleSearchStr,
  handleSearchResult,
}) {
  console.log(searchStr);
  return (
    <div
      style={{
        left: showSearch ? "0" : "-100%",
        transition: "left 0.3s ease-in-out",
        position: "fixed",
      }}
      className={showSearch ? "search-box" : "search-box abc"}
    >
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
  );
}
