const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    sensorUser: {
        type: String,
        require: [true, "Logged in required"]
    },
    sensorName: {
        type: String,
        required: [true, "Sensor Name error"]
    },
    sensorType: {
        type: String,
        require: [true, "Sensor type error"]
    },
    sensorReading: {
        type: Number,
        required: [true, "Data reading error"]
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },

})
module.exports = mongoose.model("SensorData", dataSchema);