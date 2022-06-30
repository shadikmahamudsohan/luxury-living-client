import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="secondary-bg banner-section">
      <div className="container mx-auto row g-4 py-5 align-items-center">
        <div className="col-12 col-md-6">
          <h1 className="text-main-primary banner-title">
            We Build <br />
            Your Dream
          </h1>
          <p className="paragraph-text">
            Online Easte Agency, the mordern way to sell your own home, You can
            use Griffin Residential to market your property
          </p>
          <button className="btn btn-main-primary px-5 py-2">Booking</button>
        </div>
        <div className="col col-md-6">
          <img
            src="https://i.ibb.co/pXTwxdG/aaron-huber-s95o-B2n9jng-unsplash.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
