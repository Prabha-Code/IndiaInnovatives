import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'

export default function PollutionMap({hotspots}){

return(

<MapContainer
center={[13.0827,80.2707]}
zoom={12}
style={{height:"400px"}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{hotspots.map((h,i)=>(
<Marker
key={i}
position={[h.lat,h.lng]}
>
<Popup>
<h3>{h.location}</h3>
PM2.5: {h.pm25}
</Popup>
</Marker>
))}

</MapContainer>

)

}