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
        const {sensorUser} = req.body;
        const userReadings = await Data.find({ sensorUser })
        if(userReadings){
            res
            .status(201)
            .json({message: userReadings});
            next();
        }
    } catch (error) {
    console.error(error);
  }
}