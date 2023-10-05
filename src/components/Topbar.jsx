import * as React from "react";
import { useContext,useState } from "react";
import "./Topbar.css";
import Signin from "./Signin";
import Context from "../Data";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { deepOrange } from "@mui/material/colors";
import Searchpage from "./Searchpage";
import "./Navbar.css";
import menu from '../assets/menu.png'

export default function Topbar() {
  const data = useContext(Context);
  
  return (
    <>
      <img src={menu} alt="men" className="menu-icon" onClick={data.handleShowNavbar}></img>
 
    <div className="Topbar">
    
    <div className="search">
      <select onClick={data.handleClickOpen2}>
        <option value="">All</option>
      
      </select>
      <Signin />
      <Searchpage/>  
      <input
        type="text"
        placeholder="Search..."
        ref={data.inputRef}
        onClick={data.handleClickOpen2}
      ></input>
      
    

    </div>

    <p className="Time">
      <AccessTimeIcon sx={{ color: deepOrange[600] }} fontSize="small" />{" "}
      {data.time.toLocaleTimeString()}{" "}
      <CalendarMonthIcon sx={{ color: deepOrange[600] }} fontSize="small" />{" "}
      {data.date.toLocaleDateString()}
    </p>
    {data.isAuth ? (
      <button className="signin" onClick={data.signUserOut}>
        Sign Out
      </button>
    ) : (
      <>
        <button className="signin" onClick={data.handleClickOpen1}>
          Sign Up
        </button>
      </>
    )}

  </div>
    
    
    
    </>
   
  );
}
