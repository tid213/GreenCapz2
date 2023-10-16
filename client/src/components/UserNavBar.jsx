import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import menu from '../images/menu.svg';
import closeX from '../images/x.svg';
import { motion } from "framer-motion";

const UserNavBar = ({logout}) => {

    const [expand, setExpand] = useState(false);
    const navigate = useNavigate();

    const userLogOut = (event) =>{
        event.preventDefault();
        logout();
    }

    const navExpand = (event) => {
        event.preventDefault();
        console.log("click")
        if (expand === false){
            setExpand(true);
        } else{
            setExpand(false);
        }
    }

    if (expand === false){
        return(
          <div className="navbar" onClick={navExpand}>
            <nav>
              <img src={menu}></img>
            </nav>
          </div>
        )
    } else{
        return(
            <div>
              <div className="navbar" onClick={navExpand}>
                <nav>
                  <img src={closeX}></img>
                  
                    <div className="nav-options">
                    <ul>
                        <li onClick={() => navigate('/')}>Dashboard</li>
                        <div className="nav-list-spacer"></div>
                        <li onClick={() => navigate('/addreading')}>Add Reading</li>
                        <div className="nav-list-spacer"></div>
                        <li onClick={userLogOut}><b>Log out</b></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}

export default UserNavBar;