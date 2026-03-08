export default function SourceRanking({hotspots}){

const sorted=[...hotspots].sort((a,b)=>b.probability-a.probability)

return(

<div className="bg-white p-4 rounded shadow">

<h2 className="font-bold mb-3">
Candidate Sources
</h2>

{sorted.map((s,i)=>(
<div key={i} className="mb-2">
<div className="flex justify-between">
<span>{s.source}</span>
<span>{s.probability}</span>
</div>
<div className="bg-gray-200 h-2">
<div
className="bg-red-500 h-2"
style={{width:`${s.probability*100}%`}}
></div>
</div>
</div>
))}

</div>

)

}