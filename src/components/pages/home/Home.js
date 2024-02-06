import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="heroSection">
          <div className="left-heroSection">
            <div className="left-heroSection-Container">
              <div className="heading">
                <span>Create</span> captivating content effortlessly with AI
              </div>
              <p>
                Revolutionise your business by streamlining image creation with
                our range of AI-powered solutions.
              </p>
              <Link to="/login">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Get Started for Free
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
                    Create multiple <br />
                    product images that <br />
                    suit <span>your brand</span>
                  </div>
                  <p>
                    Simplify your content creation process <br /> by
                    transforming boring product images to photoshoot-quality{" "}
                    <br /> marketing images
                  </p>
                  <Link to="/login">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
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
                <img
                  src="https://static.apkem.com/images/en/com.vyroai.photoenhancer/screen6.png"
                  alt="food"
                  style={{
                    margin: "0px 30px 75px",
                    width: "390px",
                    height: "600px",
                    borderRadius: "20px",
                  }}
                />
                <img
                  src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/b07ac2ed-3726-4875-87af-88a0f8930733/1507127854/phototune-ai-photo-enhancer-screenshot.png"
                  alt="lady"
                  style={{
                    margin: "75px 30px 0px",
                    width: "390px",
                    height: "600px",
                    borderRadius: "20px",
                  }}
                />
                <img
                  src="https://static.apkem.com/images/en/com.vyroai.photoenhancer/screen5.png"
                  alt="bottle"
                  style={{
                    margin: "0px 30px 75px",
                    width: "390px",
                    height: "600px",
                    borderRadius: "20px",
                  }}
                />
                <img
                  src="https://static.apkem.com/images/en/com.vyroai.photoenhancer/screen1.png"
                  alt="bottle"
                  style={{
                    margin: "75px 30px 0px",
                    width: "390px",
                    height: "600px",
                    borderRadius: "20px",
                  }}
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="contactUs">
          <p>
            Excited to try with your own photos? <br />
            Have specific request?
          </p>
          <Link to="https://careers.cognizant.com/global/en/contact-us">
            <button className="bg-transparent text-white py-2 px-12 border hover:border-transparent rounded contactBTN">
              Contact us
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
