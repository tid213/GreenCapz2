import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from '../images/user.svg';
import signup from '../images/user-plus.svg';
import mushroomChar from '../images/mushroom-char-1.png';
import mushroomChar2 from '../images/mushroom-char-3.png';
import mushroomChar3 from '../images/mushroom-char-4.png';
import mushroomGroup from '../images/mushroom-group.png';
import NavBar from '../components/NavBar.jsx';
import { Fade } from "react-awesome-reveal";

const LandingPage = () => {

    const navigate = useNavigate();

    const signupButton = (e) => {
        e.preventDefault();
        navigate('/signup')
    }
    const loginButton = (e) => {
        e.preventDefault();
        navigate('/login')
    }

    return(
        <div className="landing-page">
          <NavBar />
          <div className="page-header">
            <div className="page-header-left"><p>Green</p></div>
            <div className="page-header-right"><p>Capz</p></div>
          </div>
            <div className="landing-welcome"><h4>Welcome to..</h4></div>
            <div className="landing-title-div">
              <div className="landing-image">
                <div className="spacer">
                  <div className="spacer-left"></div>
                  <div className="spacer-right"></div>
                </div>
                 <img src={mushroomChar}></img>
              </div>
              <div className="landing-brand">
                    <h4>GREEN CAPZ</h4>
                
                <p>Your gateway to precision hydroponic cultivation! </p>
              </div>
          </div>          
          <div className="landing-intro">
                <p>
                    At <b>Green Capz</b>, we specialize in monitoring sensor data for hydroponic 
                    growers, empowering you to achieve <b>optimal</b> crop yields and sustainability. 
                    Our technology and insights combine to revolutionize 
                    your hydroponic experience, ensuring your plants thrive in the most 
                    <b> efficient</b> and environmentally conscious way possible.</p>
            </div>
            <Fade><div className="product-info-header"><h4>Here to help</h4></div></Fade>
            <div className="product-info-container">
            <Fade delay={1}>
            <div className="info-div-header">
             <div className="product-info-div">
                <div className="spacer">
                <div className="spacer-left-2"></div>
                <div className="spacer-right-2"></div>
                </div>
                <div className="landing-image"><img src={mushroomChar2}></img></div>
             </div>
             <div className="product-info-title">
              <h4>How?</h4>
              <p>With our technology and knowledge we can provide many benefits to ensure an optimal grow</p>
              <div className="tech-spec-button"><p>Tech Specs</p></div>
             </div>
             </div>
             </Fade>
             <div className="product-info">
              <Fade cascade damping={0.1}>
                <ul>
                    <li><b>Optimize Plant Health:</b> Precise nutrient monitoring ensures that plants receive the ideal mix of nutrients, promoting robust growth, higher yields, and healthier crops.</li>
                    <div className="product-info-li-spacer"></div>
                    <li><b>Resource Efficiency:</b> It minimizes nutrient waste, saving money and reducing environmental impact by using only what's necessary for plant growth.</li>
                    <div className="product-info-li-spacer"></div>
                    <li><b>Early Issue Detection:</b> Regular monitoring helps detect nutrient imbalances or deficiencies before they harm plants, allowing for timely adjustments and preventing crop loss.</li>
                    <div className="product-info-li-spacer"></div>
                    <li><b>Data-Driven Decisions:</b> Data collected aids in fine-tuning nutrient solutions, resulting in consistent and predictable crop outcomes.</li>
                    <div className="product-info-li-spacer"></div>
                    <li><b>Increased Productivity:</b> By maintaining optimal nutrient levels, growers can achieve faster growth cycles and more abundant harvests, increasing overall productivity in hydroponic systems.</li>
                </ul>
                </Fade>
            </div>
            </div>
            <Fade delay={3}>
            <div className="join-container">
              <div className="join-title-div">
               <div className="join-header"><h4>Join Us Now..</h4></div>
               <div className="join-div-img">
                <div className="spacer">
                <div className="spacer-left-3"></div>
                <div className="spacer-right-3"></div>
                </div>
                <div className="join-img"><img src={mushroomChar3}></img></div>
               </div>
                <div className="join-lvl-up"><h4>and Level Up</h4></div>
              </div>
             <div className="join-text">
                <p>Join <b>Green Capz</b> to level up your hydroponic growing experience! 
                   Elevate your hydroponic journey, maximize efficiency, and unlock 
                   your garden's full potential with <b>Green Capz</b>. Join us today and grow smarter!</p>
               <div className="desktop-buttons">
                <div className="dt-signup"><p>Sign up</p></div>
                <div className="dt-signin"><p>Sign in</p></div>
               </div>
             </div>
             </div>
             </Fade>
             <div className="join-now">
              <div className="join-now-img">
              <div className="full-bar"></div> 
              <div className="levelup-mushrooms"><img src={mushroomGroup}></img></div>
              </div>
              <div className="join-buttons">
                <div className="dt-signup"><p>Sign up</p></div>
                <div className="dt-signin"><p>Sign in</p></div>
               </div>
             </div>
            <div className="footer"><p>Green Capz 2023</p></div>
        </div>
    )

}

export default LandingPage;