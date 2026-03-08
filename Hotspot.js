const mongoose = require("mongoose")

const HotspotSchema = new mongoose.Schema({

location:String,

pm25:Number,

lat:Number,

lng:Number,

probability:Number,

source:String

})

module.exports = mongoose.model("Hotspot",HotspotSchema)