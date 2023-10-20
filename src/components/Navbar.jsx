import React, { useState } from "react";
import "./Navbar.css";
import "./Topbar.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Data";
export default function Navbar() {
  const data = useContext(Context);
  const [active, setActive] = useState({
   home:true,
   fav:false,
   read:false,
   about:false
  })


  return (
    <>
      <nav>
        <div className="container">
          <div
            className={`nav-elements ${data.showNavbar? 'active':''}`}
          >
            <img src='/assets/logo.png' alt="logo" className="logo"/>
            <ul>
              <li onClick={data.handleHideNavbar}>
                <Link to="/" className={`Link ${active.home? 'active':''}`} onClick={()=>{
                  setActive({...active,home:true,fav:false,read:false,about:false});
                  }}>
                  Home
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/favourite" className={`Link ${active.fav? 'active':''}`} onClick={()=>{
                  setActive({...active,home:false,fav:true,read:false,about:false});
                  }}>
                  Favourite
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/readlater" className={`Link ${active.read? 'active':''}`} onClick={()=>{
                  setActive({...active,home:false,fav:false,read:true,about:false});
                  }} >
                  Read later
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/about" className={`Link ${active.about? 'active':''}`} onClick={()=>{
                  setActive({...active,home:false,fav:false,read:false,about:true});
                  }}>
                  About
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
     
      </nav>
    </>
  );
}
