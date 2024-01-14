import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="heroSection">
        <div className="left-heroSection">
          <div className="left-heroSection-Container">
            <div className="heading">
              <span>Create</span> beautiful converting content with AI
            </div>
            <p>
              Automate end-to-end Image creation and boost your business using
              our suite of AI products
            </p>
            <Link to="/login">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                style={{ backgroundColor: "#7168fa" }}
              >
                Start for free
              </button>
            </Link>
          </div>
        </div>
        <div className="right-heroSection">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/aiproductshowcasemaker/wepb/header.webp"
            alt=""
          />
        </div>
      </div>
      <div className="brandCard">
        <div className="brandCard-Container">
          <div className="brandCard-Container-Wrapper">
            <div className="left-brandCard">
              <div className="left-brandCard-Container">
                <div className="heading-brandCard">
                  Create multiple <br />product images that <br />
                  suit <span>your brand</span>
                </div>
                <p>
                  Simplify your content creation process <br /> by transforming boring
                  product images to photoshoot-quality <br /> marketing images
                </p>
                <Link to="/login">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    style={{ backgroundColor: "#7168fa" }}
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>

            <div className="right-brandCard">
              <img
                src="https://claid.ai/static/b5614aedd814cf816ebc0c39c17ee6e1/f991a/brand.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="advertSection">
        <div className="advertSection-Container">
          <div className="heading-advertSection">
            Boost conversions
            <br />
            <span>with enhanced images and</span>
            <br />
            <span>improved lighting</span>
          </div>
          <p>
            90% of online shoppers* rely on imagery when making a purchase
            decision.
            <br />
            Without the right images - you are losing conversions
          </p>
        </div>
      </div>
      <div className="contactUs"></div>
    </div>
  );
};

export default Home;
