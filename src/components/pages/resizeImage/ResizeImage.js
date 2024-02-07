import React from "react";
import Header from "../../shared/header/Header";
import "./ResizeImage.css";
import Footer from "../../shared/footer/Footer";
function ResizeImage() {
  return (
    <>
      <Header />
      <div className="resizeImage">
        <div className="herosection-resizeImage"></div>
        <div className="marqueSection"></div>
        <div className="steps-resizeImage"></div>
        <div className="getstarted-resizeImage"></div>
      </div>
      <Footer />
    </>
  );
}
export default ResizeImage;
