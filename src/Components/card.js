import React from "react";
import { useSelector } from "react-redux";

function Card(props) {
  const data = useSelector((state) => state.country.data);

  // Add conditional rendering to handle cases where data is undefined or empty
  if (!data) {
    return null; // Return null if data is not available
  }

  return (
    <div className="card border-0 shadow rounded bg-light">
      <div className="card-body">
        <h4 className="card-title text-center">{data.country}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-light d-flex justify-content-between align-items-center">
            <h6 className="text-dark m-0">Currency</h6>
            <span className="badge badge-primary text-dark">{data.currency}</span>
          </li>
          <li className="list-group-item bg-light d-flex justify-content-between align-items-center">
            <h6 className="text-dark m-0">Unit of Speed</h6>
            <span className="badge badge-success text-dark">{data.speed}</span>
          </li>
          <li className="list-group-item bg-light d-flex justify-content-between align-items-center">
            <h6 className="text-dark m-0">Dist & Vol</h6>
            <span className="badge badge-info text-dark">{data.distanceVolume}</span>
          </li>
          <li className="list-group-item bg-light d-flex justify-content-between align-items-center">
            <h6 className="text-dark m-0">Timezone</h6>
            <span className="badge badge-warning text-dark">{data.timezone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
