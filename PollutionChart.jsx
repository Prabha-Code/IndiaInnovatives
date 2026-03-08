import {LineChart,Line,XAxis,YAxis,Tooltip} from "recharts"

export default function PollutionChart({hotspots}){

return(

<LineChart
width={900}
height={300}
data={hotspots}
>

<XAxis dataKey="location"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="pm25"
stroke="#ff0000"
/>

</LineChart>

)

}