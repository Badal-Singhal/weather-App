import React from "react";
import { useData } from "../context/data.context";

export default function Filter() {
  const { filter, setFilter } = useData();

  const onRadioChange=(ev)=>{
    setFilter(ev.target.value);
  }

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Sorter
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <label htmlFor="country">Sorting By Country</label>
          <input
            id="country"
            name="sorting-option"
            type="radio"
            className="sorting-radio"
            value="country"
            checked={filter === "country"}
            onChange={onRadioChange}
          ></input>
          <label htmlFor="city">Sorting By City</label>
          <input
            id="city"
            type="radio"
            name="sorting-option"
            className="sorting-radio"
            value="city"
            checked={filter === "city"}
            onChange={onRadioChange}
          ></input>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
