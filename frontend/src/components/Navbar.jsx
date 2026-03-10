import { Link } from "react-router-dom"

function Navbar(){

return(

<div className="bg-gray-900 text-white p-4 flex justify-between">

<h1 className="font-bold text-lg">
LeadSense AI
</h1>

<div className="flex gap-6">

<Link to="/dashboard">Dashboard</Link>

<Link to="/predict">Predict Lead</Link>

<Link to="/profile">Profile</Link>

<Link to="/">Logout</Link>

</div>

</div>

)

}

export default Navbar