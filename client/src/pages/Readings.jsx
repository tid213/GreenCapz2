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
        }

        getUserData();
    }, [username]);


    const getNoteTime = (utcDate) => {
        let event = new Date(utcDate);
        let time = event.toJSON();
        let formatedTime = new Date(time).toLocaleString();
        return formatedTime;
    }

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
              <p className="intro">{getNoteTime(label)}</p>
              <p className="label">{`${payload[0].value}`}</p>
              <p className="desc"></p>
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
                width={300}
                height={200}
                data={tentTemps}
                 margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <XAxis dataKey="createdAt" hide="true"/>
                <YAxis hide="true" />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#00e304" fill="#00e304" />
            </AreaChart>
            </div>
            <ul>
                {getTentTemps()}
            </ul>
        </div>
    )

}

export default Readings;