import React from "react";
import { useNavigate } from "react-router-dom";
import "./OverlayBg.css";
import { BiArrowBack } from "react-icons/bi";
import CustomSpinner from "../CustomSpinner";

const OverlayBg = ({ children, house, loading }) => {
  const navigate = useNavigate();
  if (loading) {
    return <CustomSpinner />;
  }
  console.log(house);
  return (
    <div className="overlay-container">
      <button
        onClick={() => {
          navigate(`/${window.history.back()}`);
        }}
        className="m-2 btn-main-primary go-back"
      >
        <BiArrowBack className="arrow-icon" />
      </button>
      <img
        className="overlay-container-image"
        src={house?.image}
        alt="background"
      />
      <div className="overlay"></div>
      <div className="container mx-auto d-flex align-items-center justify-content-center">
        <div className="my-5 card shadow">
          {/* Content goes here */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverlayBg;
