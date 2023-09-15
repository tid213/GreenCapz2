import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Select from 'react-select';

const AddReading = () =>{
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [readingData, setReadingData] = useState({
    sensorUser: "",
    sensorName: "tent-temp",
    sensorType: "temperature",
    sensorReading: "",
    });
  const {sensorUser, sensorName, sensorType, sensorReading} = readingData;
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      readingData.sensorUser = user;
      return status
        ? console.log("User Authenticated")
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
    
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReadingData({
      ...readingData,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { data } = await axios.post(
            "/addreading",
            {
              ...readingData,
            },
            { withCredentials: true }
          );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error){
        console.log(error);
    }
    setReadingData({
        ...readingData,
        sensorName: "Tent Temp",
        sensorType: "Temperature",
        sensorReading: "",
      });
  };
    return(
        <div className="form_container">
          <div>
            <h1>Add Reading</h1>
          </div>
          <form onSubmit={handleSubmit}>
           <div className="select-box">
            <label htmlFor="sensorName">Sensor Name:</label>
            <select name="sensorName"  onChange={handleOnChange}>
              <option value="tent-temp">Tent Temp</option>
              <option value="tent-hum">Tent Humidity</option>
              <option value="water-temp">Water Temp</option>
              <option value="water-ph">Water pH</option>
              <option value="water-ppm">Water PPM</option>
            </select>
           </div>
           <div>
            <label htmlFor="sensorType">Sensor Type:</label>
            <select name="sensorType" onChange={handleOnChange}>
              <option value="temperature">Temperature F</option>
              <option value="humidity">Humidity</option>
              <option value="ph">pH</option>
              <option value="ppm">PPM</option>
            </select>
           </div>
           <div>
            <label htmlFor="sensorReading">Sensor Reading:</label>
            <input
            type="number"
            name="sensorReading"
            value={sensorReading}
            placeholder="Enter sensor reading"
            onChange={handleOnChange}
            />
           </div>
           <button type="submit">Submit</button>
         </form>
        </div>
    )

}

export default AddReading;