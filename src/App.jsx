import LandingPage from "./Components/LandingPage"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import CubeLoder from "./Components/loders/CubeLoder"
import Navbar from "./Components/header/Navbar"
import LoginNavbar from "./Components/header/LoginNavbar"
import Login from "./Components/user/Login"
import MidSection from "./Components/MidSection"
import Footer from "./Components/footer/Footer"
import PollForm from "./Components/poll/pollForm"
// import SideBar from "./Components/header/SideBar"
import PollingUi from "./Components/poll/PollingUi"
import {PollContainer} from "./Components/poll/PollContainer"
import Analytics from "./Components/Analytics/Analytics"

import { Attribute } from "./Components/Attribute"
import { Barchart } from "./Components/charts/Barchart"

function App() {

  let loginStatus = useSelector((state) => {
    return state.component.loginStatus;
  });

  return (
    <div className="App">
      {loginStatus === true ? <Navbar /> : <LoginNavbar />}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MidSection/>
      <Analytics/>
      <Footer/>
    </div>
  );
}

export default App;
