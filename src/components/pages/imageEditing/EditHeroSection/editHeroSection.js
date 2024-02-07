import React from "react";
import "./editHeroSection.css";
import { Link } from "react-router-dom";
const editHeroSection = () => {
  return (
    <>
      <div className="editHeroSection">
        <div className="heroLeft">
          <h1 className="tag">
            <span>Transform Your Photos with AI Magic</span>
          </h1>
          <h1 className="subTag">
            Experience the power of Intelligent Image Editing
          </h1>

          <div className="getStartedBtn">
            <Link to="/login" className="getStarted">
              Get Started
            </Link>
          </div>
        </div>
        <div className="editHeroRight">
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
      </div>
    </>
  );
};
export default editHeroSection;
