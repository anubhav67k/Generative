import React from "react";
import Tilt from "react-parallax-tilt";
import "./features.css";
function features() {
  return (
    <section className="features">
      <section className="feature">
        <div className="featureLeft">
          <span className="featureTag">Image Background Remover</span>
          <p className="featureSubTag">
            Easily Erase Backgrounds for Stunning Visuals.Elevate your
            creativity with simplified image background removal.
          </p>
        </div>

        <div className="featureRight">
          <Tilt scale="1.2">
            <div className="thumbnailContainer">
              <img
                src="https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-1.webp"
                alt=""
                className="thumbnail"
              />
            </div>
          </Tilt>
        </div>
      </section>
      <section className="featureReverse">
        <div className="featureLeft">
          <span className="featureTag">Change Image Color Selectively</span>
          <p className="featureSubTag">
            You can give the desired color to your image with our AI tool.
          </p>
        </div>

        <div className="featureRight">
          <Tilt scale="1.2">
            <div className="thumbnailContainer">
              <img
                src="https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-3.webp"
                alt=""
                className="thumbnail"
              />
            </div>
          </Tilt>
        </div>
      </section>
      <section className="feature">
        <div className="featureLeft">
          <span className="featureTag">Add Text To Image</span>
          <p className="featureSubTag">
            Enhance your images with captivating text additions.Elevate your
            visuals with stylish and easy text additions.
          </p>
        </div>

        <div className="featureRight">
          <Tilt scale="1.2">
            <div className="thumbnailContainer">
              <img
                src="https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-4.webp"
                alt=""
                className="thumbnail"
              />
            </div>
          </Tilt>
        </div>
      </section>
      <section className="featureReverse">
        <div className="featureLeft">
          <span className="featureTag">Upsampling</span>
          <p className="featureSubTag">
            Advanced algorithms automatically upsample images, adjusting the
            resolution to desired settings.
          </p>
        </div>

        <div className="featureRight">
          <Tilt scale="1.2">
            <div className='thumbnailContainerLast'>
              <img
                src="https://static.lightxeditor.com/assets/images/home/ResizePhoto.webp"
                alt=""
                className="thumbnail"
              />
            </div>
          </Tilt>
        </div>
      </section>
    </section>
  );
}

export default features;
