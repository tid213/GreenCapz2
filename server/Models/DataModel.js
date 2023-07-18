const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    sensorName: {
        type: String,
        required: [true, "Sensor Name reading error"]
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