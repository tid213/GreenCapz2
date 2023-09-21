import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import greenMushroom from '../images/green-mushroom.png';
import login from '../images/user.svg';
import signup from '../images/user-plus.svg';
import landingImg from '../images/background.png'
import menu from '../images/menu.svg';
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
          <div className="home-page-header">
            <img src={menu}></img>
          </div>
          <div className="landing-title-div">
              <div className="landing-welcome"><h4>Welcome to..</h4></div>
          </div>
          <div className="landing-brand"><h4>Green Capz</h4></div>
           
            <div className="landing-intro">
                <p>Your gateway to precision hydroponic cultivation! 
                    At Green Capz, we specialize in monitoring sensor data for hydroponic 
                    growers, empowering you to achieve optimal crop yields and sustainability. 
                    Our technology and insights combine to revolutionize 
                    your hydroponic experience, ensuring your plants thrive in the most 
                    efficient and environmentally conscious way possible.</p>
            </div>
            <div className="spacer"></div>
            <div className="product-info-div">
                <div className="product-info-title"><h4>Here to help..</h4></div>
            </div>
            <div className="product-info-title-big"><h4>How?</h4></div>
            <div className="product-info">
                <ul>
                    <li>Optimize Plant Health: Precise nutrient monitoring ensures that plants receive the ideal mix of nutrients, promoting robust growth, higher yields, and healthier crops.</li>
                    <li>Early Issue Detection: Regular monitoring helps detect nutrient imbalances or deficiencies before they harm plants, allowing for timely adjustments and preventing crop loss.</li>
                    <li>Data-Driven Decisions: Data collected aids in fine-tuning nutrient solutions, resulting in consistent and predictable crop outcomes.</li>
                    <li>Increased Productivity: By maintaining optimal nutrient levels, growers can achieve faster growth cycles and more abundant harvests, increasing overall productivity in hydroponic systems.</li>
                </ul>
            </div>
            <div className="spacer"></div>
            <div className="join-header"><h4>Join us</h4></div>
            <div className="landing-text">
                <p>Explore the future of cultivation with Green Capz! Log in or sign up today!</p>
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