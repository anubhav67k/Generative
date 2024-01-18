import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

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
          <div className="marqueeContainer">
          <Marquee>
            <img src="https://claid.ai/static/3e68c0e0b346cb33e25ae464a8f4ca2b/35aa2/Fruits.webp" alt="food" style={{margin: "0px 30px 120px", width: "512", height: "850px"}} />
            <img src="https://claid.ai/static/ccbba0087c4dde2b8d41fe49d9dc39b7/35aa2/Potrait.webp" alt="lady" style={{margin: "120px 30px 0px", width: "550px", height: "850px"}}/>
            <img src="https://claid.ai/static/e75114c66a4d7e8f8e34269918d540af/35aa2/Oil.webp" alt="bottle" style={{margin: "0px 30px 120px", width: "550px", height: "850px"}}/>
            <img src="https://claid.ai/static/fea351d5354c1e41a2abd7b5c16e09a9/35aa2/Room.webp" alt="bottle" style={{margin: "120px 30px 0px", width: "550px", height: "850px"}}/>
          </Marquee>
          </div>
        </div>
      </div>
      <div className="contactUs">

      </div>
    </div>
  );
};

export default Home;
