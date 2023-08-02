import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

const Readings = (username) => {

    const [userReadings, setUserReadings] = useState({});
    const [tentTemps, setTentTemps] = useState({});

    useEffect(()=>{
        const sensorUser = username.username;
        const getUserData = async () => {
            const { data } = await axios.post(
                "http://localhost:4000/readings",
                {sensorUser},
                { withCredentials: true }
              );
              const {status, message, tentTemp} = data;
              setUserReadings(message);
              setTentTemps(tentTemp);
              console.log(tentTemp)
        }

        getUserData();
    }, [username]);

    const showReadings = () => {
        let list = [];
        for(let i=0; i<userReadings.length; i++){
            let key = i + 1;
            list.push(<li key={key}>{userReadings[i].sensorName}{userReadings[i].sensorReading}{userReadings[i].sensorType}</li>)
        }
        return list;
    }

    const getTentTemps = () => {
        let list = [];
        for (let i=0; i<tentTemps.length; i++){
            let key = i + 1;
            list.push(<li key={key}>{tentTemps[i].sensorReading}</li>)
        }
        return list;
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value}`}</p>
              <p className="intro">{label}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
          );
        }
      
        return null;
      };



    return(
        <div className="readingsContainer">
            <h1>Show Readings</h1>
            <div>
            <AreaChart
                width={400}
                height={200}
                data={tentTemps}
                 margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <XAxis dataKey="createdAt" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </div>
            <ul>
                {getTentTemps()}
            </ul>
        </div>
    )

}

export default Readings;