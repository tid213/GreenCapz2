import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import character from '../images/character.png';
import axios from "axios";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

const Readings = (username) => {

    const [userReadings, setUserReadings] = useState({});
    const [tentTemps, setTentTemps] = useState({});
    const [tentHumidity, setTentHumidity] = useState({});
    const [waterTemps, setWaterTemps] = useState({});
    const [waterPH, setWaterPH] = useState({});
    const [waterPPM, setWaterPPM] = useState({});

    useEffect(()=>{
        const sensorUser = username.username;
        const getUserData = async () => {
            const { data } = await axios.post(
                "http://localhost:4000/readings",
                {sensorUser},
                { withCredentials: true }
              );
              const {status, message, tentTemp, tentHum, waterTemp, waterPh, waterPpm} = data;
              setUserReadings(message);
              setTentTemps(tentTemp);
              setTentHumidity(tentHum);
              setWaterTemps(waterTemp);
              setWaterPH(waterPh);
              setWaterPPM(waterPpm);
        }

        getUserData();
    }, [username]);


    const getNoteTime = (utcDate) => {
        let event = new Date(utcDate);
        let time = event.toJSON();
        let formatedTime = new Date(time).toLocaleString();
        return formatedTime;
    }

    const getTime = () => {
      let event = Date.now();
      let formatedTime = new Date(event).toLocaleString();
      return formatedTime;
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip tooltip-div">
              <p className="label">{`${payload[0].value}`}f</p>
              <p className="desc">Reading taken:</p>
              <p className="intro">{getNoteTime(label)}</p>
            </div>
          );
        }
      
        return null;
      };

      const CustomTooltipHumidity = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip tooltip-div">
              <p className="label">{`${payload[0].value}`}%</p>
              <p className="desc">Reading taken:</p>
              <p className="intro">{getNoteTime(label)}</p>
            </div>
          );
        }
      
        return null;
      };

      const CustomTooltipPH = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip tooltip-div">
              <p className="label">{`${payload[0].value}`} pH</p>
              <p className="desc">Reading taken:</p>
              <p className="intro">{getNoteTime(label)}</p>
            </div>
          );
        }
      
        return null;
      };

      const CustomTooltipPPM = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip tooltip-div">
              <p className="label">{`${payload[0].value}`}ppm</p>
              <p className="desc">Reading taken:</p>
              <p className="intro">{getNoteTime(label)}</p>
            </div>
          );
        }
      
        return null;
      };



    return(
        <div>
          <div className="readingsContainer">
            <h1>Temperature</h1>
            <div className="tent-temp-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={200}
                data={tentTemps}
                 margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >
                <XAxis tick={false}/>
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#00e304" strokeWidth="3" fillOpacity={0} fill="#000000" />
              </AreaChart>
              </ResponsiveContainer>
              <div className="reading-chart-timestamp">
              <p>Last reading taken: {getTime()}</p>
              </div>
            </div>
          </div>
          <div className="readingsContainer">
            <h1>Humidity</h1>
            <div className="tent-temp-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={200}
                data={tentHumidity}
                 margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >
                <XAxis dataKey="createdAt" hide="true"/>
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip content={<CustomTooltipHumidity />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#00e304" strokeWidth="3" fillOpacity={0} fill="#000000" />
              </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="readingsContainer water-div-glow">
            <h1>Temperature</h1>
            <div className="tent-temp-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={200}
                data={waterTemps}
                 margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >
                <XAxis dataKey="createdAt" hide="true"/>
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#04c7c7" strokeWidth="4" fillOpacity={0} fill="#000000" />
              </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="readingsContainer water-div-glow">
            <h1>pH</h1>
            <div className="tent-temp-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={200}
                data={waterPH}
                 margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >
                <XAxis dataKey="createdAt" hide="true"/>
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip content={<CustomTooltipPH />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#04c7c7" strokeWidth="4" fillOpacity={0} fill="#000000" />
              </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="readingsContainer water-div-glow">
            <h1>PPM</h1>
            <div className="tent-temp-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={300}
                height={200}
                data={waterPPM}
                 margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5
                }}
            >
                <XAxis dataKey="createdAt" hide="true"/>
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip content={<CustomTooltipPPM />} />
                <Area type="monotone" dataKey="sensorReading" stroke="#04c7c7" strokeWidth="4" fillOpacity={0} fill="#000000" />
              </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
    )

}

export default Readings;