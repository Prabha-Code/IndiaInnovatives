const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/sentinelmesh")

const Hotspot = require("./models/Hotspot")

// Sample data
const sampleHotspots = [
  { location: "T. Nagar", pm25: 45, lat: 13.0827, lng: 80.2707, probability: 0.8, source: "Traffic" },
  { location: "Anna Nagar", pm25: 38, lat: 13.0850, lng: 80.2100, probability: 0.6, source: "Industry" },
  { location: "Adyar", pm25: 52, lat: 13.0067, lng: 80.2572, probability: 0.9, source: "Construction" },
  { location: "Velachery", pm25: 41, lat: 12.9750, lng: 80.2206, probability: 0.7, source: "Waste Burning" },
  { location: "Mylapore", pm25: 35, lat: 13.0368, lng: 80.2676, probability: 0.5, source: "Cooking" }
]

const insertSampleData = async () => {
  const count = await Hotspot.countDocuments()
  if (count === 0) {
    await Hotspot.insertMany(sampleHotspots)
    console.log("Sample data inserted")
  }
}

mongoose.connection.once('open', () => {
  insertSampleData()
})

app.get("/api/hotspots", async(req,res)=>{
const data = await Hotspot.find()
res.json(data)
})

app.post("/api/hotspots", async(req,res)=>{
const hotspot = new Hotspot(req.body)
await hotspot.save()
res.json(hotspot)
})

app.listen(5000,()=>{
console.log("Server running")
})