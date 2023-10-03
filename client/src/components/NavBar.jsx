import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from '../images/menu.svg';


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
                  <img src={menu}></img>
                  <div className="nav-options">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/signup')}>Sign up</li>
                        <li>Tech Specs</li>
                        <li onClick={() => navigate('/login')}>Log in</li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}

export default NavBar;