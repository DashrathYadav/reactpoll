import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function LoginNavbar() {
  const dispatch = useDispatch();

  //currently checking login status by name but later on change to loginStatus
  const loginStatus = useSelector((state) => {
    return state.component.loginStatus;
  });

  const userName = useSelector((state) => {
    return state.component.name;
  });



  const setPage =(e)=>{
    
    const type= e.target.attributes.getNamedItem('action').value;
    const page= e.target.attributes.getNamedItem('page').value;

    if(page==="logout")
    {
      sessionStorage.setItem("loginStatus",'false')
      sessionStorage.setItem("loginId",'')
      sessionStorage.setItem("userName",'')

    }

    dispatch({
      type:type,
      page:page,
    })
  }

  return (
    <div>
      <nav className="Navbar--navbar">
        <div className="Navbar--logoSpace">
          <img className="Navbar--logo" src={logo} width={90}></img>
        </div>
        <div className="Navbar--list">
          {/* conditonal redering between name and login button*/}

          {loginStatus === false ? (
            <button className="Navbar--button" page="login" action="setPage" onClick={setPage}>
              Login
            </button>
          ) : (
            <>
              <li className="Navbar--button Navbar--li">{userName}</li>
              <button className="Navbar--button"  page="logout" action="setlogout" onClick={setPage}>
                Logout
              </button>
              <button className="Navbar--button"  page="createNewPoll" action="setPage" onClick={setPage}>
                + New
              </button>
            </>
          )}

          <button className="Navbar--button" page="home" action="setPage" onClick={setPage}>
            home
          </button>
          <button className="Navbar--button"  page="about" action="setPage" onClick={setPage} >About</button>
          <button className="Navbar--button"   page="contact" action="setPage" onClick={setPage} >Contact</button>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavbar;
