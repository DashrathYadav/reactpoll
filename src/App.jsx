import LandingPage from "./Components/LandingPage"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import CubeLoder from "./Components/loders/CubeLoder"
import Navbar from "./Components/header/Navbar"
import LoginNavbar from "./Components/header/LoginNavbar"
import Login from "./Components/user/Login"

function App() {
  let page=useSelector((state)=>{ return state.component.page})
  let loginStatus=useSelector((state)=>{ return state.component.loginStatus});

  let componetToRender;
  if(page==="landing")
  {
    componetToRender=<LandingPage/>
  }
  else if(page==="login")
  {
    componetToRender=<Login/>
    
  }
  else if(page==="home")
  {
    console.log("home Page");
  }
  
  return (
   <div className="App">

    { loginStatus===true? <Navbar/> : <LoginNavbar/> }
    { componetToRender }
   </div>
  )
}

export default App
