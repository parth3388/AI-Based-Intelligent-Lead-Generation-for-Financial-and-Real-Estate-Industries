import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function Profile(){

const navigate = useNavigate()

const logout = () => {

localStorage.removeItem("token")
localStorage.removeItem("user")

navigate("/")

}

const user = {
name:"Vaibhav",
role:"AI Analyst",
email:"vaibhav@leadsense.ai",
joined:"Feb 2026",
predictions:42,
timeSpent:"3h 21m"
}

return(

<div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">

<Navbar/>

<div className="flex justify-center items-center p-10">

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.4}}
className="bg-white rounded-2xl shadow-2xl w-[700px] p-8"
>

<motion.h2
whileHover={{scale:1.05}}
className="text-3xl font-bold text-center mb-6 text-pink-600"
>

AI User Profile

</motion.h2>

<div className="flex justify-center mb-6">

<motion.div
whileHover={{scale:1.1}}
className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold"
>

V

</motion.div>

</div>

<div className="grid grid-cols-2 gap-4 mb-6">

<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-gray-500 text-sm">Name</p>
<p className="font-semibold">{user.name}</p>
</div>

<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-gray-500 text-sm">Role</p>
<p className="font-semibold">{user.role}</p>
</div>

<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-gray-500 text-sm">Email</p>
<p className="font-semibold">{user.email}</p>
</div>

<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-gray-500 text-sm">Member Since</p>
<p className="font-semibold">{user.joined}</p>
</div>

</div>

<h3 className="text-xl font-semibold mb-3 text-gray-700">
AI Usage Stats
</h3>

<div className="grid grid-cols-2 gap-4 mb-8">

<motion.div
whileHover={{scale:1.05}}
className="bg-pink-100 p-5 rounded-lg shadow"
>

<p className="text-gray-600">Predictions Made</p>

<p className="text-2xl font-bold text-pink-600">
{user.predictions}
</p>

</motion.div>

<motion.div
whileHover={{scale:1.05}}
className="bg-purple-100 p-5 rounded-lg shadow"
>

<p className="text-gray-600">Time Spent</p>

<p className="text-2xl font-bold text-purple-600">
{user.timeSpent}
</p>

</motion.div>

</div>

<div className="flex justify-center">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
onClick={logout}
className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
>

Logout

</motion.button>

</div>

</motion.div>

</div>

</div>

)

}

export default Profile