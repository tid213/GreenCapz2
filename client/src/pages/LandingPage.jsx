import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import greenMushroom from '../images/green-mushroom.png';
import login from '../images/user.svg';
import signup from '../images/user-plus.svg';
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
            <div className="landing-title">
              <h4>Welcome to..</h4>
            </div>
            <div className="landing-img">
              <img src={greenMushroom}></img>
            </div>
            <div className="landing-name">
            <p>Green Capz</p>
            </div> 
            <div className="landing-buttons">
            <div onClick={loginButton} className="button-div">
                <div className="button-img">
                <img src={login}></img>
                </div>
                <div className="button-text">
                <p>Sign in</p>
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