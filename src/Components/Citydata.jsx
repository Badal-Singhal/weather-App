import React, { useState } from "react";
import { useData } from "../context/data.context";
import { Link } from "react-router-dom";

export default function Citydata() {
  const { data, searchData } = useData();

  return (
    <div className="table">
      {searchData && (
        <table className="table-container">
          <thead>
            <tr>
              <th>geoname_id</th>
              <th>City Name</th>
              <th>Country</th>
              <th className="hide">Country Code</th>
              <th>Population</th>
              <th>Time Zone</th>
              <th className="hide">Modification date</th>
            </tr>
          </thead>
          <tbody>
            {searchData.results.map((city, index) => (
              <tr key={index}>
                <td>{city.geoname_id}</td>
                <td>
                  <Link to={`/city/${city.ascii_name}`} target="_blank">
                    {city.ascii_name}
                  </Link>
                </td>
                <td>{city.cou_name_en}</td>
                <td className="hide">{city.country_code}</td>
                <td>{city.population}</td>
                <td>{city.timezone}</td>
                <td className="hide">{city.modification_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <table className="table-container">
        <thead>
          <tr>
            <th>geoname_id</th>
            <th>City Name</th>
            <th>Country</th>
            <th className="hide">Country Code</th>
            <th>Population</th>
            <th>Time Zone</th>
            <th className="hide">Modification date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((city, index) => (
            <tr key={index}>
              <td>{city.geoname_id}</td>
              <td>
                <Link to={`/city/${city.ascii_name}`} target="_blank">
                  {city.ascii_name}
                </Link>
              </td>
              <td>{city.cou_name_en}</td>
              <td className="hide">{city.country_code}</td>
              <td>{city.population}</td>
              <td>{city.timezone}</td>
              <td className="hide">{city.modification_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
