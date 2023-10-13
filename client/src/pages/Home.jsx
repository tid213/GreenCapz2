import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Readings from '../pages/Readings';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import UserNavBar from '../components/UserNavBar.jsx';
import thermometer from '../images/thermometer.png';
import humidity from '../images/humidity.png';
import greenMushroom from '../images/green-mushroom.png';
import calendar from '../images/calendar.svg';
import NavBar from '../components/NavBar.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const [navExpand, setNavExpand] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "/",
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

  }, [cookies, navigate, removeCookie, loggedIn]);

  
  const Logout = () => {
    removeCookie("token");
    setLoggedIn(false);
  };

  if (loggedIn === true){
    return (
      <>
      <UserNavBar logout={Logout}/>
      <Dashboard username={username}/>
      </>
      
    )
  } else if (loggedIn === false){
    return(<LandingPage />)
  } else{
    return(
      <div className="loading-div"></div>
    )
  }
  
};

export default Home;