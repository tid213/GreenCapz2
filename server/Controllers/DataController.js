const Data = require("../Models/DataModel");

module.exports.AddReading = async (req, res, next) => {
    try {
        const {sensorUser, sensorName, sensorType, sensorReading, createdAt} = req.body;
        const reading = await Data.create({sensorUser, sensorName, sensorType, sensorReading, createdAt});
        res
          .status(201)
          .json({ message: "Reading added successfully"});
          next();
    } catch(error) {
        console.error(error);
    }
}