import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from '../images/menu.svg';
import closeX from '../images/x.svg';
import { motion } from "framer-motion";

const NavBar = () => {

    const [expand, setExpand] = useState(false);
    const navigate = useNavigate();

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
                  <motion.div
                  initial={{ opacity: 0, scale: 1,  x: "50vw" }}
                  animate={{ opacity: 1, scale: 1, width: "50vw",x: "50vw" }}
                  transition={{ duration: 0.75, origin: 1}}>
                    <div className="nav-options">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <div className="nav-list-spacer"></div>
                        <li onClick={() => navigate('/signup')}>Sign up</li>
                        <div className="nav-list-spacer"></div>
                        <li>Tech Specs</li>
                        <div className="nav-list-spacer"></div>
                        <li>Contact</li>
                        <div className="nav-list-spacer"></div>
                        <li onClick={() => navigate('/login')}><b>Log in</b></li>
                    </ul>
                  </div>
                  </motion.div>
                  
                </nav>
              </div>
            </div>
        )
    }
}

export default NavBar;