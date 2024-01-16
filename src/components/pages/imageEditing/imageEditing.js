import React from 'react'
import "./imageEditing.css"
import { Link } from "react-router-dom";

function imageEditing() {
  return(
    <div className="descriptionBox">
      <div className='description'>
        <h1 className='highlightedText'>
          AI-Powered Creativity: AI Photo Editor
        </h1>
        <p>
          Edit photos like a pro,Get Creative with Generative AI!With Cognizant AI-enabled photo editor
        </p>
      <div>
      <Link to="/login">
            <button className="bg-white text-black hover:bg-red-800 text-white font-bold mg-10 py-2 px-4 rounded try-it-for-free-btn">
              Try it for free
            </button>
          </Link>
        
      </div>
      </div>    
    </div>
  
  )
}


export default imageEditing;
