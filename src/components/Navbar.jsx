import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import '../App.css'

export default function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className='navbar' style={{backgroundColor:'white',height:"100%"}}>
   
<div id="mySidenav" className="sidenav">
<img src={logo} style={{width:'150px',height:"150px"}}/>
  <a href="javascript:void(0)" className="closebtn" onClick={()=>closeNav()}>&times;</a>
  <ul>
            <li>home</li>
            <li>Favourite</li>
            <li>Read Later</li>
            <li>About</li>
         </ul>
</div>

<span className='hamburger' onClick={()=>openNav()}>&#9776;</span>

    </div>
  )
}
