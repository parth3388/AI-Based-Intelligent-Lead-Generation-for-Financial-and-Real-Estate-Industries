import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import Predict from "./pages/Predict"


function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/dashboard" element={<Dashboard/>} />

<Route path="/predict" element={<Predict/>} />

<Route path="/profile" element={<Profile/>} />

</Routes>

</BrowserRouter>

)

}

export default App