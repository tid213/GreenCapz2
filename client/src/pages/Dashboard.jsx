import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Readings from '../pages/Readings';
import thermometer from '../images/thermometer.png';
import humidity from '../images/humidity.png';
import greenMushroom from '../images/green-mushroom.png';
import calendar from '../images/calendar.svg';



const Dashboard = (username) => {

  const [user, setUser] = useState("");

  useEffect(() =>{
    setUser(username.username)
  })

  const navigate = useNavigate();

  const AddReadingRedirect = () => {
    navigate("/addreading");
  };


  const getTime = () => {
    let event = Date.now();
    let formatedTime = new Date(event).toLocaleString();
    return formatedTime;
  }
    
    return(
      <div className="dashboard-page">
        <div className="page-header">
            <div className="page-header-left"><p>Green</p></div>
            <div className="page-header-right"><p>Capz</p></div>
        </div>
        <div className="dashboard-live">
          <div className="dashboard-live-img"></div>
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
          </div>
          <div className="readings-time">
            <p>Last update: {getTime()}</p>
          </div>
          <Readings username={user} />
        
      </div>
    )
}

export default Dashboard;