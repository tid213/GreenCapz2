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
import humidity from '../images/humidity.png';
import greenMushroom from '../images/green-mushroom.png';
import calendar from '../images/calendar.svg';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [navExpand, setNavExpand] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "https://green-capz-c923aa3235e1.herokuapp.com:4000",
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

  const getTime = () => {
    let event = Date.now();
    let formatedTime = new Date(event).toLocaleString();
    return formatedTime;
  }

  const toggleNav = (e) => {
    e.preventDefault();
    console.log("click")
    if(navExpand === false){
      setNavExpand(true)
    } else{
      setNavExpand(false)
    }
  }

  const showNav = () => {
    if (navExpand === false){
      return(
        <div className="home-page-header" onClick={toggleNav}>
            <h4>
            Green Capz
            </h4>
            <img src={greenMushroom}></img>
            <h5>
            omgnoez
            </h5>
         </div>
      )
    } else if (navExpand === true) {
      return(
        <div>
          <div className="home-page-header" onClick={toggleNav}>
            <h4>
            Green Capz
            </h4>
            <img src={greenMushroom} onClick={toggleNav}></img>
            <h5>
            omgnoez
            </h5>
          </div>
          <div className="spacer"></div>
          <div className="header-expand">
              <div onClick={AddReadingRedirect}><p>Add Reading</p></div>
              <p>|</p>
              <div><p>Change Password</p></div>
              <p>|</p>
              <div onClick={Logout}><p>Logout</p></div>
            </div>
        </div>
      )
    }
  }
  if (loggedIn){
    return (
      <>
        <div className="home_page">
        {showNav()}
          <div className="live-readings">
               <div className="tent-reading-div">
                <div className="tent-reading-img">
                <img src={thermometer}></img>
                </div>
                <div className="tent-reading">
                <p>78f</p>
                </div>
               </div>
               <div className="tent-reading-div">
                <div className="tent-reading-img">
                <img src={humidity}></img>
                </div>
                <div className="tent-reading">
                <p>55%</p>
                </div>
              </div>
              <div className="button-div water-reading-div">
                <div className="button-img water-reading-img">
                <p>pH</p>
                </div>
                <div className="button-text water-reading">
                <p>6.0</p>
                </div>
              </div>
              <div className="button-div water-reading-div">
                <div className="button-img water-reading-img">
                <p>PPM</p>
                </div>
                <div className="button-text water-reading">
                <p>604</p>
                </div>
            </div>
          </div>
          <div className="readings-time">
            <p>Last update: {getTime()}</p>
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