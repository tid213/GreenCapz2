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
        }

        getUserData();
    }, [username]);

    const showReadings = () => {
        let list = [];
        for(let i=0; i<userReadings.length; i++){
            let key = i + 1;
            list.push(<li key={key}>{userReadings[i].sensorName}{userReadings[i].sensorReading}</li>)
        }
        return list;
    }



    return(
        <div className="readingsContainer">
            <h1>Show Readings</h1>
            <ul>
                {showReadings()}
            </ul>
        </div>
    )

}

export default Readings;