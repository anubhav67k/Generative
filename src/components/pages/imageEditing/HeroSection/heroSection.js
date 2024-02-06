import React from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";
const heroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroLeft">
        <h1 className="tag">
          <span>Transform Your Photos with AI Magic</span>
        </h1>
        <h1 className="subTag">
          Experience the power of Intelligent Image Editing
        </h1>
        <Link to="/login">
          <div className="getStartedBtn">
            <a className="getStarted" href="#">
              Get Started
            </a>
          </div>
        </Link>
      </div>
      <div className="heroRight">
        <div className="heroImageContainer">
          <img
            src="https://static.lightxeditor.com/assets/images/photo-editor/photoHomeBanner-Image.webp"
            alt=""
            className="heroImage"
          />
        </div>
      </div>
      <div className="circleBottom"></div>
      <div className="circleTop"></div>
      <div className="circleTopLeft"></div>
      <div className="circleBottomRight"></div>
    </section>
  );
};
export default heroSection;
