import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import '../App.css'
import { useContext } from "react";
import Context from "../Data";

export default function Home({children}) {
  const data = useContext(Context);

  return (
    <div className="layout">
    <div className={`nav`}>
      <Navbar className='Navbar'/>
    </div>
     <div className="top-content">
     <Topbar/>
     {children}
     </div>
    </div>
  );
}
