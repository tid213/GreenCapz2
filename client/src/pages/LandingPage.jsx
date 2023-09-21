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
            <h4>
            
            </h4>
            <img src={menu}></img>
          </div>
          <div className="landing-title-div">
              <div className="landing-welcome"><h4>Welcome to..</h4></div>
              <div className="landing-brand"><h4>Green Capz</h4></div>
        </div>
            
            <div className="spacer"></div>
            <div className="landing-text">
                <p>Log in or sign up today!</p>
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