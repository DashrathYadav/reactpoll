import LandingPage from "./Components/LandingPage"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import CubeLoder from "./Components/loders/CubeLoder"
import Navbar from "./Components/header/Navbar"
import LoginNavbar from "./Components/header/LoginNavbar"
import Login from "./Components/user/Login"
import MidSection from "./Components/MidSection"
import Footer from "./Components/footer/Footer"

function App() {

  let loginStatus = useSelector((state) => {
    return state.component.loginStatus;
  });

  return (
    <div className="App">
      {loginStatus === true ? <Navbar /> : <LoginNavbar />}
      <MidSection />
      <Footer/>
    </div>
  );
}

export default App;
