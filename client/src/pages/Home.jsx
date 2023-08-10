import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Readings from '../pages/Readings';
import LandingPage from '../pages/LandingPage';
import character from '../images/character.png';
import activity from '../images/activity.svg';
import lock from '../images/lock.svg';
import thermometer from '../images/thermometer.png';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? setLoggedIn(true)
        : setLoggedIn(false);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    setLoggedIn(false);
  };
  const AddReadingRedirect = () => {
    navigate("/addreading");
  };
  if (loggedIn){
    return (
      <>
        <div className="home_page">
          <div className="home-page-header">
          <div className="dashboard-img">
          
          </div>
          <h4>
            {" "}
            Welcome <span>{username}</span>
          </h4>
          
          </div>
          <div className="dashboard-buttons"> 
              <div onClick={AddReadingRedirect} className="button-div">
                <div className="button-img">
                <img src={activity}></img>
                </div>
                <div className="button-text">
                <p>Reading+</p>
                </div>
              </div>
              <div onClick={Logout} className="button-div">
                <div className="button-img">
                <img src={lock}></img>
                </div>
                <div className="button-text">
                <p>Logout</p>
                </div>
              </div>
          </div>
          <div className="live-readings">
          <div className="button-div tent-reading-div">
                <div className="button-img tent-reading-img">
                <img src={thermometer}></img>
                </div>
                <div className="button-text tent-reading">
                <p>78f</p>
                </div>
              </div>
          </div>
          <Readings username={username} />
        </div>
      </>
    );
  } else{
    return(<LandingPage />)
  }
  
};

export default Home;