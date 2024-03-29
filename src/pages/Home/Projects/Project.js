import React from "react";
import { Link } from "react-router-dom";

const Project = ({ data, handleClick }) => {
  const { _id, image, name, location } = data;
  return (
    <div className="text-center col-12 col-md-4">
      <Link to={`/details/${_id}`} className="card-link card">
        <div className="w-full mb-3 inner">
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="paragraph-text">
          <h5 className="fw-bold text-main-primary">{name}</h5>
          <p className="">{location}</p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
