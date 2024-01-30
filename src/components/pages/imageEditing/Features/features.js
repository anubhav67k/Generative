import React from 'react'
import Tilt from "react-parallax-tilt";
import "./features.css"
function features() {
  return (
    <section className='features'>
      <section className='feature'>
      <div className='featureLeft'>

        <span className='featureTag'>Image Background Remover</span>
        <p className='featureSubTag'>
          It’s common for images to require a completely clear background. We will remove the background, leaving it completely blank, allowing the image to be used on any canvas.

        </p>

      </div>
      <Tilt scale='1.2'>
        <div className='featureRight'>

          <img src='https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-1.webp' alt='' className='thumbnail' />

        </div>
      </Tilt>
    </section><section className='featureReverse'>
        <div className='featureLeft'>

          <span className='featureTag'>Change Image Color Selectively</span>
          <p className='featureSubTag'>
          If you wish to add a pop of color to a certain part of the picture, AI tool has got you covered. It lets you attain any desired color and add it selectively to your image. Whether you need to change a single color or multiple colors in your image, you can replace both effortlessly one by one. Change the color of your hair, outfit, eye, and more in the picture using AI tool.

          </p>

        </div>
        <Tilt scale='1.2'>
          <div className='featureRight'>

            <img src='https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-3.webp' alt='' className='thumbnail' />

          </div>
        </Tilt>
      </section>
      <section className='feature'>
      <div className='featureLeft'>

        <span className='featureTag'>Add Text To Image</span>
        <p className='featureSubTag'>
        If you wish to add a pop of color to a certain part of the picture, AI tool has got you covered. It lets you attain any desired color and add it selectively to your image. Whether you need to change a single color or multiple colors in your image, you can replace both effortlessly one by one. Change the color of your hair, outfit, eye, and more in the picture using AI too
        



        </p>

      </div>
      <Tilt scale='1.2'>
      <div className='featureRight'>
        
        <img src='https://static.lightxeditor.com/assets/images/photo-editor/PeSectionImg-4.webp' alt='' className='thumbnail' />
        
      </div>
      </Tilt>
    </section>
    <section className='featureReverse'>
      <div className='featureLeft'>

        <span className='featureTag'>Upsampling</span>
        <p className='featureSubTag'>
        Advanced algorithms automatically upsample images, adjusting the resolution to desired settings. Even the most pixelated images can be upsampled to look clean and crisp.
        

        </p>

      </div>
      <Tilt>
      <div className='featureRight'>
        
        <img src='https://cdn3.pixelcut.app/web/tools/workflow_magic_eraser_thumbnail.jpg' alt='' className='thumbnail' />
        
      </div>
      </Tilt>
    </section>
      </section>
  
  );
}

export default features