import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="home_page">
            <h1>Welcome</h1>
            <button onClick={signupButton}>Signup</button>
            <button onClick={loginButton}>Login</button>
        </div>
    )

}

export default LandingPage;