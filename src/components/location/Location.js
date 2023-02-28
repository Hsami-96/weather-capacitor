import React from "react";
import './Location.css'
export const Location = ({ locationProps }) => {
  return (
    <>
      {locationProps && (
        <div className="locationDetailContainer">
          <strong className="city">{locationProps.location.name}, </strong>
          <strong className="region">{locationProps.location.region}</strong>
        </div>
      )}
    </>
  );
};
