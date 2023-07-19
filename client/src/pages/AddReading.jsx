import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddReading = () =>{
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [readingData, setReadingData] = useState({
    sensorUser: "",
    sensorName: "",
    sensorType: "",
    sensorReading: "",
    });
  const {sensorUser, sensorName, sensorType, sensorReading} = readingData;
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      readingData.sensorUser = user;
      console.log(cookies);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
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
            "http://localhost:4000/addreading",
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
        sensorName: "",
        sensorType: "",
        sensorReading: "",
      });
  };
    return(
        <div className="form_container">
          <div>
            <h1>Add Reading</h1>
          </div>
          <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor="sensorName">Sensor Name:</label>
            <input
            type="text"
            name="sensorName"
            value={sensorName}
            placeholder="Enter sensor name"
            onChange={handleOnChange}
            />
           </div>
           <div>
            <label htmlFor="sensorType">Sensor Type:</label>
            <input
            type="text"
            name="sensorType"
            value={sensorType}
            placeholder="Enter type of sensor"
            onChange={handleOnChange}
            />
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
        <ToastContainer />
        </div>
    )

}

export default AddReading;