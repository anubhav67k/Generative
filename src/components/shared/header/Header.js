import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/cognizantLogo.png";
import AiPhotoshootImage from "../../../assets/ai-photoshoot-image.jpeg";
import ImageEditing from "../../../assets/image-editing.png";
import ResizeImage from "../../../assets/resize-image.webp";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = () => {
    // we have to make dropdownContent display property to none
    setIsActive(true);
  };

  const changeIconDown = () => {
    setIsDropdownOpen(false);
    setIsActive(false);
  };
  const changeIconUp = () => {
    setIsDropdownOpen(true);
    setIsActive(false);
  };

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="leftHeader">
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
          </div>
          <div className="rightHeader">
            <div className="products">
              <button
                className="productsButton"
                onMouseLeave={changeIconDown}
                onMouseEnter={changeIconUp}
              >
                Products
                {!isDropdownOpen ? (
                  <GoChevronDown className="h-8" />
                ) : (
                  <GoChevronUp className="h-8" />
                )}
              </button>
              <div
                className="dropdownContent"
                style={{ display: isActive ? "none" : "" }}
                onMouseLeave={changeIconDown}
                onMouseEnter={changeIconUp}
              >
                <Link to="/aiphotoshoot" onClick={handleOptionClick}>
                  <div className="ai-photoshoot-option">
                    <img
                      src={AiPhotoshootImage}
                      alt="AiPhotoshoot"
                      className="w-15 h-12"
                    />
                    <span>Ai Photoshoot</span>
                  </div>
                </Link>
                <Link to="/imageediting" onClick={handleOptionClick}>
                  <div className="image-editing-option">
                    <img
                      src={ImageEditing}
                      alt="ImageEditing"
                      className="w-15 h-12"
                    />
                    <span>Image Editing</span>
                  </div>
                </Link>
                <Link to="/resizeimage" onClick={handleOptionClick}>
                  <div className="resize-image-option">
                    <img
                      src={ResizeImage}
                      alt="ResizeImage"
                      className="w-15 h-12"
                    />
                    <span>Resize Image</span>
                  </div>
                </Link>
              </div>
            </div>
            <Link to="/login">
              <div className="login">Login</div>
            </Link>
            <Link to="/login">
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded try-it-for-free-btn">
                Try it for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
