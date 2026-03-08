import {useEffect,useState} from "react"
import {getHotspots} from "../api"
import PollutionMap from "./PollutionMap"
import PollutionChart from "./PollutionChart"
import SourceRanking from "./SourceRanking"

export default function Dashboard(){

const [hotspots,setHotspots]=useState([])

useEffect(()=>{

getHotspots().then(setHotspots)

},[])

return(

<div className="p-6 grid grid-cols-3 gap-6">

<div className="col-span-2">

<PollutionMap hotspots={hotspots}/>

</div>

<div>

<SourceRanking hotspots={hotspots}/>

</div>

<div className="col-span-3">

<PollutionChart hotspots={hotspots}/>

</div>

</div>

)

}