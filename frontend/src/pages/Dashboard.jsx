import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
LineChart,
Line
} from "recharts"

const leadData = [
{ name: "Low", leads: 40 },
{ name: "Medium", leads: 80 },
{ name: "High", leads: 120 }
]

const conversionData = [
{ day: "Mon", rate: 12 },
{ day: "Tue", rate: 18 },
{ day: "Wed", rate: 22 },
{ day: "Thu", rate: 26 },
{ day: "Fri", rate: 30 }
]

function Dashboard(){

return(

<div className="bg-gray-100 min-h-screen">

<Navbar/>

<div className="p-10">

<motion.h1
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:0.35}}
className="text-3xl font-bold mb-10"
>

AI Lead Intelligence Dashboard

</motion.h1>

{/* Insight Cards */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

{[
{title:"Total Leads",value:"1245"},
{title:"High Intent Leads",value:"342"},
{title:"Conversion Rate",value:"27%"},
{title:"Model Accuracy",value:"97%"}
].map((card,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.08}}
whileHover={{scale:1.07}}
className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
>

<h3 className="text-gray-500 text-sm">
{card.title}
</h3>

<p className="text-2xl font-bold mt-2">
{card.value}
</p>

</motion.div>

))}

</div>

{/* Charts */}

<div className="grid md:grid-cols-2 gap-8 mb-10">

{/* Lead Distribution */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.4}}
className="bg-white p-6 rounded-xl shadow"
>

<h2 className="text-lg font-semibold mb-4">
Lead Score Distribution
</h2>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={leadData}>

<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="leads" fill="#ec4899"/>

</BarChart>

</ResponsiveContainer>

</motion.div>

{/* Conversion Trend */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.4}}
className="bg-white p-6 rounded-xl shadow"
>

<h2 className="text-lg font-semibold mb-4">
Weekly Conversion Trend
</h2>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={conversionData}>

<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="rate"
stroke="#6366f1"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</motion.div>

</div>

{/* Recent Leads Table */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.4}}
className="bg-white p-6 rounded-xl shadow"
>

<h2 className="text-lg font-semibold mb-4">
Recent Lead Predictions
</h2>

<table className="w-full text-left">

<thead>

<tr className="border-b text-gray-600">

<th className="py-2">Lead ID</th>
<th>Age</th>
<th>Income</th>
<th>Score</th>
<th>Status</th>

</tr>

</thead>

<tbody>

<tr className="border-b hover:bg-gray-100">

<td className="py-2">101</td>
<td>29</td>
<td>80k</td>
<td>89</td>
<td className="text-green-600 font-semibold">
High
</td>

</tr>

<tr className="border-b hover:bg-gray-100">

<td className="py-2">102</td>
<td>42</td>
<td>50k</td>
<td>48</td>
<td className="text-yellow-600 font-semibold">
Medium
</td>

</tr>

<tr className="hover:bg-gray-100">

<td className="py-2">103</td>
<td>31</td>
<td>70k</td>
<td>78</td>
<td className="text-green-600 font-semibold">
High
</td>

</tr>

</tbody>

</table>

</motion.div>

</div>

</div>

)

}

export default Dashboard