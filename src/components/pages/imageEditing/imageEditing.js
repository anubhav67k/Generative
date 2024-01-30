import HeroSection from "./HeroSection/heroSection";
import Features from "./Features/features";
import "./imageEditing.css";
import ImageEditing from "../../../assets/image-editing.png";
import AiPhotoshootImage from "../../../assets/ai-photoshoot-image.jpeg";
import Food from "../../../assets/Food Icon.jpg";
import Automative from "../../../assets/Automation Icon.jpg";
import Ecommerce from "../../../assets/E-commerce Icon.jpg";
import Printing from "../../../assets/Printing Icon.jpg";
import RealEstate from "../../../assets/Real Estate Icon.jpg";
import Marquee from "react-fast-marquee";

// import SliderIcon from "../../../assets/slider-icon.jpg";


function imageEditing() {
  

  return(
    

    <>
    {/* Hero Section start */}

    <HeroSection/>

    {/* Hero Section End */}

    
       <div className='corousal'>
      <Marquee speed={100} pauseOnHover='true' >
      <img src='https://cdn3.pixelcut.app/web/tools/workflow_image_upscaler_thumbnail.jpg' alt='' className='slidingImage'/> 
      <img src='https://cdn3.pixelcut.app/assets/templates/d3ce2c62-bde8-4dce-8beb-3a2d463fa4eb/preview.jpg' alt='' className='slidingImage'></img>
      <img src='https://cdn.pixelcut.app/assets/templates/4be3b387-6b55-46e7-abff-62281167eba7/preview.jpg' alt='' className='slidingImage'></img>
      <img src='https://cdn3.pixelcut.app/assets/templates/W4krOPxYwNTg3zwXAN2A/preview.jpg' alt='' className='slidingImage'></img>
      <img src='https://cdn3.pixelcut.app/assets/templates/UjDXr5s4OOPFiIJwqFGC/preview.jpg' alt='' className='slidingImage'></img>
      
      </Marquee> 
    </div>
    <Features/>   
    <div className='demoModuleDashboard'>
      <div className='demoModuleControls'>
        <div className='controlsModuleSection'>
          <h1 className='controlsModuleSectionTitle'>
            Choose Preset:

          </h1>
          <div className='controlModuleCategories'>
            <div className='controlModuleCategory'>
              <img className='controlModuleIcon' src={Ecommerce} alt=''>

              </img>
              <div className='controlModuleLabel'>
                  E-commerce

              </div>
            </div>
            <div className='controlModuleCategory'>
              <img className='controlModuleIcon' src={Food} alt=''>

              </img>
              <div className='controlModuleLabel'>
                Food
                
              </div>
            </div>
            <div className='controlModuleCategory'>
              <img className='controlModuleIcon' src={RealEstate} alt=''>

              </img>
              <div className='controlModuleLabel'>
                Real Estate
                
              </div>
            </div>
            <div className='controlModuleCategory'>
              <img className='controlModuleIcon' src={Printing} alt=''>

              </img>
              <div className='controlModuleLabel'>
                Printing
                
              </div>
            </div>
            <div className='controlModuleCategory'>
              <img className='controlModuleIcon' src={Automative} alt=''>

              </img>
              <div className='controlModuleLabel'>
                Automative
                
              </div>
            </div>
            

          </div>

        </div>
        <div className='controlActionItems'>
          <h1 className='controlsModuleSectionTitle'>
            Choose the operation(s):
          </h1>
          <div className='controlsModuleOptionlist'>
            <div className='controlsModuleOption'>
            <label class="c-toggler__label Controls-module--Switcher--cf7c2" data-testid="Toggler">
              <input type="checkbox" class="c-toggler__input"/>
                <span class="c-toggler__slider">
                  </span>
                  <span class="c-toggler__text">
                    <div class="Controls-module--SwitcherLabel--5343a">
                      Upscale
                    </div>
                  </span>
            </label>

            </div>
            <div className='controlsModuleOption'>
            <label class="c-toggler__label Controls-module--Switcher--cf7c2" data-testid="Toggler">
              <input type="checkbox" class="c-toggler__input"/>
                <span class="c-toggler__slider">
                
                </span>
                <span class="c-toggler__text">
                  <div class="Controls-module--SwitcherLabel--5343a">
                    AI Color Correction
                  </div>
                </span>
            </label>
            </div>
            <div className='controlsModuleOption'>
            <label class="c-toggler__label Controls-module--Switcher--cf7c2" data-testid="Toggler">
              <input type="checkbox" class="c-toggler__input"/>
                <span class="c-toggler__slider">
                
                </span>
                <span class="c-toggler__text">
                  <div class="Controls-module--SwitcherLabel--5343a">
                    Remove Background
                  </div>
                </span>
            </label>
            </div>
            <div className='controlsModuleOption'>
            <label class="c-toggler__label Controls-module--Switcher--cf7c2" data-testid="Toggler">
              <input type="checkbox" class="c-toggler__input"/>
                <span class="c-toggler__slider">
                
                </span>
                <span class="c-toggler__text">
                  <div class="Controls-module--SwitcherLabel--5343a">
                    Smart Frame
                  </div>
                </span>
            </label>

            </div>



          </div>

        </div>

      </div>
      <div className='demoMainContent'>
         <img  className='demoImage' src={ImageEditing} alt=""/>
        <img  id="my-img" src={AiPhotoshootImage} alt=""/>
        <input type="range" min="0" max="100" value="50" id="slider"/> 


    
          

      </div>
    </div>
    {/* <section className='secRight'>
      <p className='sectionTag'>
        IMAGE EDITING PARAGRAH
      </p>
      <div className='thumbnail'>
        <img src={AiPhotoshootImage} alt='' className='imgFluid'>

        </img>
      </div>
    </section>
     */}
    </>

  
  
  )
}


export default imageEditing;
