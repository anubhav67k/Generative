import React, { useRef, useState } from "react";
import "./ImageGeneration.css";
import slide1 from "../../../assets/slide1 (1).webp";
import download from "../../../assets/download.avif";
import { Link } from "react-router-dom";
const ImageGeneration = () => {
  return (
    <div className="ImageGeneration">
      <div className="content">
        <h1>Image Generator using Artificial Intelligence </h1>
        <p>
          Convert your text into image within a second using this AI Image
          Generator tool
        </p>
        <div className="input-box">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Describe what you want to see"
            />
          </div>
          <div className="btn">
            <button className="button">Generate </button>
          </div>
        </div>
      </div>
      <div className="Image-Gallery">
        <div className="Img-card">
          <img src={slide1} />
          <div className="download">
            <a href="#" className="download-btn">
              <img src={download} width={60} />
            </a>
          </div>
        </div>
        <div className="Img-card">
          <img src={slide1} />
          <div className="download">
            <a href="#" className="download-btn">
              <img src={download} width={60} />
            </a>
          </div>
        </div>
        <div className="Img-card">
          <img src={slide1} />
          <div className="download">
            <a href="#" className="download-btn">
              <img src={download} />
            </a>
          </div>
        </div>
        <div className="Img-card">
          <img src={slide1} />
          <div className="download">
            <Link to="/" className="download-btn">
              <img src={download} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageGeneration;
