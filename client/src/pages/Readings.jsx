import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Readings = (username) => {

    const [userReadings, setUserReadings] = useState({});
    const sensorUser = username.username;

    useEffect(()=>{
        const getUserData = async () => {
            const { data } = await axios.post(
                "http://localhost:4000/readings",
                {sensorUser},
                { withCredentials: true }
              );
              const {status, message} = data;
              setUserReadings(message);
              console.log(userReadings);
        }

        getUserData();
    }, [username])

    return(
        <div className="readingsContainer">
            <h1>Show Readings</h1>
        </div>
    )

}

export default Readings;