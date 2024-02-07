import EditHeroSection from "./EditHeroSection/EditHeroSection";
import Features from "./features/Features";
import "./ImageEditing.css";
import BeforeAfterImageSlider from "react-before-after-slider";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";
function ImageEditing() {
  useEffect(() => {
    const sliderElement = document.querySelector(".styles_wrapper__3KXDn");
    if (sliderElement) {
      sliderElement.style.position = "absolute";
      sliderElement.style.top = "-1%";
      sliderElement.style.left = "-10%";
      sliderElement.style.height = "100%";
      sliderElement.style.width = "120%";
    }
  }, []);
  const [selectedSet, setSelectedSet] = useState(1);
  const handleSetChange = (setNumber, event) => {
    event.preventDefault();
    setSelectedSet(setNumber);
  };
  const renderImageSet = () => {
    switch (selectedSet) {
      case 1:
        return {
          before:
            "https://static.lightxeditor.com/assets/images/product_rb.webp",
          after:
            "https://static.lightxeditor.com/assets/images/product_cd.webp",
        };

      case 2:
        return {
          before:
            "https://img.freepik.com/premium-photo/3d-illustration-interior-living-room-box_252025-30924.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
          after:
            "https://img.freepik.com/premium-photo/illustration-interior-living-room-box_252025-5883.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
        };

      case 3:
        return {
          before:
            "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?size=626&ext=jpg",
          after:
            "https://img.freepik.com/free-vector/blue-sedan-car-isolated-white-vector_53876-67352.jpg?size=626&ext=jpg",
        };

      case 4:
        return {
          before:
            "https://img.freepik.com/free-photo/bowl-baked-beans-garlic-pepper-trivet-blue-table_114579-90057.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
          after:
            "https://img.freepik.com/free-photo/bowl-baked-beans-garlic-pepper-trivet-blue_114579-37053.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
        };

      case 5:
        return {
          before:
            "https://img.freepik.com/premium-photo/medicine-treatment-hiv-infection-pills-capsules-battle-table-different-colorful-tablets-colored-background-with-copy-space_79075-41401.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
          after:
            "https://img.freepik.com/premium-photo/medicine-treatment-hiv-infection-pills-capsules-battle-table-different-colorful-tablets-colored-background-with-copy-space_1048944-23069929.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
        };

      case 6:
        return {
          before:
            "https://img.freepik.com/free-vector/realistic-red-sofa-room_1284-12972.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
          after:
            "https://img.freepik.com/free-vector/realistic-red-square-sofa-with-lamp_1284-12838.jpg?size=626&ext=jpg&ga=GA1.1.30508127.1707162865&semt=ais",
        };
      default:
        return {
          before:
            "https://static.lightxeditor.com/assets/images/product_rb.webp",
          after:
            "https://static.lightxeditor.com/assets/images/product_cd.webp",
        };
    }
  };

  return (
    <>
      <Header />
      {/* Hero Section start */}
      <EditHeroSection />
      {/* Hero Section End */}

      <div className="corousal">
        <Marquee speed={100}>
          <img
            src="https://cdn3.pixelcut.app/web/tools/workflow_image_upscaler_thumbnail.jpg"
            alt=""
            className="slidingImage"
          />
          <img
            src="https://cdn3.pixelcut.app/assets/templates/d3ce2c62-bde8-4dce-8beb-3a2d463fa4eb/preview.jpg"
            alt=""
            className="slidingImage"
          ></img>
          <img
            src="https://cdn.pixelcut.app/assets/templates/4be3b387-6b55-46e7-abff-62281167eba7/preview.jpg"
            alt=""
            className="slidingImage"
          ></img>
          <img
            src="https://cdn3.pixelcut.app/assets/templates/W4krOPxYwNTg3zwXAN2A/preview.jpg"
            alt=""
            className="slidingImage"
          ></img>
          <img
            src="https://cdn3.pixelcut.app/assets/templates/UjDXr5s4OOPFiIJwqFGC/preview.jpg"
            alt=""
            className="slidingImage"
          ></img>
        </Marquee>
      </div>
      <Features />

      {/* Demo Section  */}

      <div className="demoSection">
        <div className="demoContainer">
          <div className="demoHeading">
            <h1 className="demoTitle">
              A powerful API-Image Editor that integrates with every business
            </h1>
            <div className="demoSubTitleContainer">
              <p className="demoSubTitle">
                {" "}
                Our image rendering API utilizes the latest AI technologies and
                encodes images to align every <br />
                <span className="subtitle">
                  {" "}
                  single image to your specific quality
                </span>
              </p>
            </div>
          </div>
          <div className="demoAction">
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(1, e)}
              >
                E-commerce
              </Link>
            </div>
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(2, e)}
              >
                Real Estate
              </Link>
            </div>
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(3, e)}
              >
                Automotive
              </Link>
            </div>
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(4, e)}
              >
                Food
              </Link>
            </div>
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(5, e)}
              >
                Supplements
              </Link>
            </div>
            <div className="demoActionItems">
              <Link
                to="#"
                className="getStarted"
                onClick={(e) => handleSetChange(6, e)}
              >
                Furniture
              </Link>
            </div>
          </div>
          <div className="horizontalLine"></div>

          <div className="demoImgSection">
            <BeforeAfterImageSlider
              before={renderImageSet().before}
              after={renderImageSet().after}
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* steps for editing the images section */}

      <div className="stepsSection">
        <div className="stepsHeading">
          <h1>Steps To Edit Your Images</h1>
        </div>
        <div className="stepsContainer">
          <div className="steps">
            <img
              src="https://framerusercontent.com/images/NAOdj56kmwGDElXo9QcSmoPTm1U.jpg?scale-down-to=512"
              alt=""
            />
            <div className="layer">
              <h3> 1. Upload Photo</h3>
              <p>Upload a product photo</p>
            </div>
          </div>
          <div className="steps">
            <img
              src="https://framerusercontent.com/images/zwpCW5UcqitIQPyDV9EGIM7DOs.jpg?scale-down-to=512"
              alt=""
            />
            <div className="layer">
              <h3>2. Choose Editing Tool</h3>
              <p>Choose the appropriate editing tool</p>
            </div>
          </div>
          <div className="steps">
            <img
              src="https://framerusercontent.com/images/EagXk2LIq5kwi45n0uBiOjFY.jpg?scale-down-to=512"
              alt=""
            />
            <div className="layer">
              <h3>3. Receive Results</h3>
              <p>Let the AI do it's magic. Creating AI product photography.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="footerContainer">
          <div className="footerLeft">
            <h1>The Photography Replacer</h1>
            <p>
              Professional product photos, instantly.From a single product
              image.
            </p>
          </div>

          <div className="buttonContainer">
            <Link to="/login" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ImageEditing;
