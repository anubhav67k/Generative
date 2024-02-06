import React ,{}from 'react'
import { Link } from "react-router-dom";
import "./AiPhotoshoot.css";
import image1 from "../../../assets/headphone.png";
import image2 from "../../../assets/3shoes.png";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";
import slide3 from "../../../assets/slide3.png";
import slide4 from "../../../assets/slide4.jpg";
import generateimage from "../../../assets/slide1 (1).webp";
import upload from "../../../assets/shoe.png";
import remove from "../../../assets/removebg shoes.png";
import Marquee from 'react-fast-marquee';
function AiPhotoshoot() {
  

  
  return (
    <div className="Aiphotoshoot">
      <div className='Herosection'>
        <div className="left-Section">
          <div className="left-Container">
            <div className='heading2'>
            Create unique product
            images in your
             brand style
            </div>
            <p>
            Turn generic product photos into catchy visuals in seconds with AI
            </p>
            <div className='gen-btn'>
            <Link to="/ImageGeneration">
              <button
                className="btn"
              >
                Generate Product Images
              </button>
            </Link>
            </div>
          </div>
        </div>
        <div className="Right-section">
          <img src={image1}></img>
          <img src={image2}/>
        </div>
      </div>
    <div className='underhero'>
      <div className='container2'>
        <div className='heading1'>From simple product shots
        <span> to attractive styles</span>
        <p>
        Engage your clients by transforming one simple product
        image into endless beautiful photoshoots that suit 
        your brand
        </p>
        </div>
      </div>
      <div className='marquee'>
      <Marquee >
        <div className='img_wrap'>
        <img src={slide1} />
        </div>
        <div className='img_wrap'>
        <img src={slide2} />
        </div>
        <div className='img_wrap'>
        <img src={slide3} />
        </div>
        <div className='img_wrap'>
        <img src={slide4}/>
        </div>
      </Marquee>
      </div>
    </div>
    <div className='functions'>
    <div className='container2'>
    <div className='heading1'>Easy to navigate,
      generate
     and scale
        <p>
        Generate images that engage customers while increasing 
        efficiency and reducing cost
        </p>
        </div>
    </div>
    </div>
    <div className='details'>
      <div className='details-left'>
        <div className='title'>1.Generate image</div>
        <div className='generate'>
        <img src={generateimage}/>
        </div>
      </div>
      <div className='details-right'>
        <div className='details-up'>
        <div className='title'>2.Remove Background</div>
        <div className='generate'>
        <img src= {remove}/>
        </div>
        </div>
        <div className='details-down'>
        <div className='title'>3.Change Background</div>
        <div className='generate'>
        <img src={upload} />
        </div>
        </div>
      </div>
    </div>
    <div className='try'>
    <Link to="/imageGeneration">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              style={{ backgroundColor: "#7168fa" }}
            >
              Try with your Products
            </button>
          </Link>
    </div>
    </div>
  )
}
export default AiPhotoshoot