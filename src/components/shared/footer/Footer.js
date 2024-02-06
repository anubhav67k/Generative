import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Linkedin from "../../../assets/linkedin.png";
import Twitter from "../../../assets/twitter.png";
import Youtube from "../../../assets/youtube.png";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-navbar">
        <div className="flex items-center justify-between footer-navbar-container">
          <div className="left-footer-navbar">
            <Link
              to="https://www.linkedin.com/company/cognizant/"
              className="link"
            >
              <img
                src={Linkedin}
                alt="Linkedin logo"
                width="25px"
                height="25px"
              />
            </Link>
            <Link to="https://twitter.com/cognizant" className="link">
              <img src={Twitter} alt="Twitter logo" width="26px" height="26px" />
            </Link>
            <Link to="https://www.facebook.com/Cognizant" className="link">
              <img src={Facebook} alt="Facebook logo" width="25px" height="25px" />
            </Link>
            <Link
              to="https://www.instagram.com/cognizant/?hl=en"
              className="link"
            >
              <img src={Instagram} alt="Instagram logo" width="25px" height="25px" color="blue" />
            </Link>
            <Link to="https://www.youtube.com/cognizant" className="link">
              <img src={Youtube} alt="Youtube logo"  width="25px" height="25px" />
            </Link>
          </div>
          <div className="right-footer-navbar">
            <Link
              to="https://www.cognizant.com/us/en/terms-conditions"
              className="link"
            >
              Terms and Conditions
            </Link>
            <Link
              to="https://www.cognizant.com/us/en/privacy-notice"
              className="link"
            >
              Privacy Notice
            </Link>
            <span>©2024 Cognizant, all rights reserved</span>
          </div>
        </div>
      </div>
      <div className="footer-site-map">
        <div className="footer-site-map-container">
          <div className="footer-site-map-sub-container">
            <div className="company">
              <h3 className="nav-footer-heading">Explore</h3>
              <div className="footer-links">
                <Link to="" className="link">
                  Blog
                </Link>
                <Link to="" className="link">
                  About Us
                </Link>
                <Link
                  to="https://soundcloud.com/cognizant-worldwide"
                  className="link"
                >
                  Podcasts
                </Link>
                <Link
                  to="https://careers.cognizant.com/global/en"
                  className="link"
                >
                  Careers
                </Link>
              </div>
            </div>
            <div className="product">
              <h3 className="nav-footer-heading">Product</h3>
              <div className="footer-links">
                <Link className="link">AI Image Generation</Link>
                <Link className="link">AI Photoshoot</Link>
                <Link className="link">Enhancement</Link>
                <Link className="link">Product Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
