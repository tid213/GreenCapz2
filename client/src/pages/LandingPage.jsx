import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import greenMushroom from '../images/green-mushroom.png';
import login from '../images/user.svg';
import signup from '../images/user-plus.svg';
import mushroomChar from '../images/mushroom-char-1.png';
import mushroomChar2 from '../images/mushroom-char-3.png';
import mushroomGroup from '../images/mushroom-group.png';
import menu from '../images/menu.svg';
import monitor from '../images/monitor.svg';
import { useCookies } from "react-cookie";
import axios from "axios";

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
          <div className="navbar">
            <nav>
            <img src={menu}></img>
            </nav>
          </div>
          <div className="landing-title-div">
              <div className="landing-welcome"><h4>Welcome to..</h4></div>
              <div className="spacer">
                <div className="spacer-left"></div>
                <div className="spacer-right"></div>
              </div>
              <div className="landing-image"><img src={mushroomChar}></img></div>
              
          </div>
          <div className="landing-brand"><h4>Green Capz</h4></div>
           
            <div className="landing-intro">
                <p>Your gateway to precision hydroponic cultivation! 
                    At <b>Green Capz</b>, we specialize in monitoring sensor data for hydroponic 
                    growers, empowering you to achieve optimal crop yields and sustainability. 
                    Our technology and insights combine to revolutionize 
                    your hydroponic experience, ensuring your plants thrive in the most 
                    efficient and environmentally conscious way possible.</p>
            </div>
            
            <div className="product-info-div">
                <div className="product-info-title"><h4>Here to help..</h4></div>
                <div className="spacer">
                <div className="spacer-left-2"></div>
                <div className="spacer-right-2"></div>
                </div>
                <div className="landing-image"><img src={mushroomChar2}></img></div>
            </div>
            <div className="product-info-title-big"><h4>How?</h4></div>
            <div className="product-info">
                <ul>
                    <li><b>Optimize Plant Health:</b> Precise nutrient monitoring ensures that plants receive the ideal mix of nutrients, promoting robust growth, higher yields, and healthier crops.</li>
                    <li><b>Resource Efficiency:</b> It minimizes nutrient waste, saving money and reducing environmental impact by using only what's necessary for plant growth.</li>
                    <li><b>Early Issue Detection:</b> Regular monitoring helps detect nutrient imbalances or deficiencies before they harm plants, allowing for timely adjustments and preventing crop loss.</li>
                    <li><b>Data-Driven Decisions:</b> Data collected aids in fine-tuning nutrient solutions, resulting in consistent and predictable crop outcomes.</li>
                    <li><b>Increased Productivity:</b> By maintaining optimal nutrient levels, growers can achieve faster growth cycles and more abundant harvests, increasing overall productivity in hydroponic systems.</li>
                </ul>
            </div>
            <div className="product-info-div">
                <div className="product-info-title"><h4>Join Us Now..</h4></div>
                <div className="spacer">
                <div className="spacer-left-3"></div>
                <div className="spacer-right-3"></div>
                </div>
                <div className="landing-image"><img src={mushroomGroup}></img></div>
            </div>
            <div className="product-info-title-big"><h4>and Level Up</h4></div>
            <div className="full-bar"></div>
            <div className="join-text">
                <p>Join <b>Green Capz</b> to level up your hydroponic growing experience! 
                   Elevate your hydroponic journey, maximize efficiency, and unlock 
                   your garden's full potential with <b>Green Capz</b>. Join us today and grow smarter!</p>
            </div>
            
            <div className="landing-buttons">
              <div onClick={loginButton} className="button-div">
                <div className="button-img">
                <img src={login}></img>
                </div>
                <div className="button-text">
                <p>Log in</p>
                </div>
              </div>
              <div onClick={signupButton} className="button-div">
                <div className="button-img">
                <img src={signup}></img>
                </div>
                <div className="button-text">
                <p>Sign up</p>
                </div>
              </div>
            </div>
            
        </div>
    )

}

export default LandingPage;