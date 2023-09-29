import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import '../App.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context  from '../Data';

export default function Navbar() {
  const data = useContext(Context);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

  return (
    <div className='navbar' style={{backgroundColor:'white',height:"100%"}}>
   
<nav id="mySidenav" className="sidenav">
<img src={logo} style={{width:'150px',height:"150px"}}/>
  <ul>
            <li><Link to="/" className='Link'>Home</Link> </li>
            <li ><Link to="/favourite" className='Link'>Favourite</Link> </li>
            <li><Link to="/readlater"className='Link' >Read later</Link> </li>
            <li ><Link to="/about"className='Link' >About</Link> </li>
         </ul>
</nav>
    </div>
  )
}
