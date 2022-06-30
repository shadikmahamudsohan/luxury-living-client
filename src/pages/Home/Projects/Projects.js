import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSpinner from "../../../components/CustomSpinner";
import useHouseData from "../../../hooks/useHouseData";
import Project from "./Project";
import "./Projects.css";

/* 
https://i.ibb.co/XYTzk6j/jarek-ceborski-jn7u-Ve-Cdf6-U-unsplash.jpg
https://i.ibb.co/Fsh7P12/liliane-limpens-d-B25y6ks-S-g-unsplash.jpg
https://i.ibb.co/tXps010/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg
https://i.ibb.co/pXTwxdG/aaron-huber-s95o-B2n9jng-unsplash.jpg
https://i.ibb.co/SP3SJcc/ben-garratt-gug-EIYGOCLk-unsplash.jpg
https://i.ibb.co/LgjCGb9/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg
https://i.ibb.co/HCchTz3/francesca-tosolini-Xy-Gv-Ej587-Mc-unsplash.jpg
*/

const Projects = () => {
  const [houses, loading] = useHouseData();
  if (loading) {
    return <CustomSpinner />;
  }
  const handleClick = (data) => {
    console.log(data);
  };
  return (
    <section className="project-section">
      <p className="project-p text-main-primary text-center">Projects</p>
      <h1 className="project-title text-main-primary text-center">
        Discover the latest Interior Design <br />
        available today
      </h1>
      <div className="my-5 houses row">
        {houses.slice(0, 3)?.map((h) => (
          <Project key={h._id} data={h} handleClick={handleClick} />
        ))}
      </div>
      <div className="d-flex justify-content-center ">
        <Link to="/houses">
          <button className="btn btn-main-primary mb-5 px-4">
            See All Houses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
