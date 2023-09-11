const Data = require("../Models/DataModel");
const User = require("../Models/UserModel");

module.exports.AddReading = async (req, res, next) => {
    try {
        const {sensorUser, sensorName, sensorType, sensorReading, createdAt} = req.body;
        const reading = await Data.create({sensorUser, sensorName, sensorType, sensorReading, createdAt});
        res
          .status(201)
          .json({ message: "Reading added successfully", success: true});
          next();
    } catch(error) {
        console.error(error);
    }
}

module.exports.Readings = async (req, res, next) => {
    try{
        const tentTemp = [];
        const tentHum = [];
        const waterTemp = [];
        const waterPh = [];
        const waterPpm = [];
        const {sensorUser} = req.body;
        const userReadings = await Data.find({ sensorUser })
        if(userReadings){
            for (let i=0; i<userReadings.length; i++){
                if (userReadings[i].sensorName === "tent-temp"){
                    tentTemp.push(userReadings[i]); 
                } else if (userReadings[i].sensorName === "tent-hum"){
                    tentHum.push(userReadings[i]);
                } else if (userReadings[i].sensorName === "water-temp"){
                    waterTemp.push(userReadings[i]);
                } else if (userReadings[i].sensorName === "water-ph"){
                    waterPh.push(userReadings[i]);
                } else if (userReadings[i].sensorName === "water-ppm"){
                    waterPpm.push(userReadings[i]);
                }
            }
            res
            .status(201)
            .json({message: userReadings, tentTemp: tentTemp, tentHum: tentHum, 
                waterTemp: waterTemp, waterPh: waterPh, waterPpm: waterPpm});
            next();
        }
    } catch (error) {
    console.error(error);
  }
}