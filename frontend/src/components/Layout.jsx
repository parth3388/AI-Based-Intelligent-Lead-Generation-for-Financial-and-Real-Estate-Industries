import { Link } from "react-router-dom";

function Layout({children}){

return(

<div className="flex h-screen">

{/* Sidebar */}

<div className="w-64 bg-gray-900 text-white p-6">

<h2 className="text-2xl font-bold mb-6">LeadSense AI</h2>

<nav className="space-y-4">

<Link to="/dashboard">Dashboard</Link><br/>

<Link to="/predict">Predict Lead</Link>

</nav>

</div>

{/* Main Content */}

<div className="flex-1 bg-gray-100 p-6">

{children}

</div>

</div>

);

}

export default Layout;