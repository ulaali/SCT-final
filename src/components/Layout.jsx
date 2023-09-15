import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import '../App.css'
export default function Home({children}) {
  return (
    <div className="layout">
    <div className="nav"><Navbar/></div> 
     <div className="top-content">
     <Topbar/>
     {children}
     </div>

    </div>
  );
}
