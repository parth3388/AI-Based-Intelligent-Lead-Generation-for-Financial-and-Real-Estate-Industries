import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function Login(){

  
const navigate = useNavigate()
  
const [username,setUsername] = useState("")

const [password,setPassword] = useState("")
const [showLogin,setShowLogin] = useState(false)

useEffect(()=>{
setTimeout(()=>{
setShowLogin(true)
},2000)
},[])

const login = async () => {

try{

const res = await axios.post(
"http://127.0.0.1:5000/login",
{
username,
password
}
)

if(res.data.message === "Login successful"){
navigate("/dashboard")
}else{
alert("Invalid credentials")
}

}catch(err){
alert("Server error")
}

}

return(

<div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 relative">

{/* TOP HEADING */}

<motion.h1
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:0.8}}
whileHover={{scale:1.1}}
className="absolute top-10 text-5xl font-bold text-white tracking-wide cursor-pointer hover:drop-shadow-[0_0_15px_white]"
>

LeadSense AI

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.8}}
className="absolute top-24 text-white text-lg"
>

Predict the Leads That Actually Convert.

</motion.p>

{/* LOGIN CARD */}

<div className="bg-white rounded-2xl shadow-2xl w-[900px] flex overflow-hidden">

{/* LEFT PANEL */}

<motion.div
initial={{x:-200,opacity:0}}
animate={{x:0,opacity:1}}
transition={{duration:1}}
className="w-1/2 bg-gradient-to-br from-pink-500 to-purple-600 text-white flex flex-col justify-center items-center p-10"
>

<h2 className="text-3xl font-bold mb-4">

Hello, Friend!

</h2>

<p className="text-center">

Enter your credentials and start using the power of AI driven lead intelligence.

</p>

</motion.div>

{/* RIGHT PANEL */}

<motion.div
initial={{opacity:0}}
animate={{opacity:showLogin?1:0}}
transition={{duration:1}}
className="w-1/2 p-10 flex flex-col justify-center"
>

<h2 className="text-2xl font-bold mb-6">

Sign In

</h2>

<input
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
className="border p-3 rounded mb-4"
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
className="border p-3 rounded mb-6"
/>

<button
onClick={login}
className="bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition"
>

Sign In

</button>

</motion.div>

</div>

{/* BOTTOM DESCRIPTION */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:1.5}}
className="absolute bottom-10 text-center text-white"
>

<p className="text-lg font-semibold">

AI-powered lead scoring to identify high-value prospects instantly.

</p>

<p className="text-sm opacity-80">

Analyze customer behavior, predict conversions, and help sales teams focus on the leads that matter most.

</p>

</motion.div>

</div>

)

}

export default Login
