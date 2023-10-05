import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import "./Topbar.css";
import "../App.css";
import menu from '../assets/menu.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Data";
export default function Navbar() {
  const data = useContext(Context);

  return (
    <>
      <nav>
        <div className="container">
          <div
            className={`nav-elements ${data.showNavbar? 'active':''}`}
          >
            <img src={logo} style={{ width: "150px", height: "150px" }} />
            <ul>
              <li onClick={data.handleHideNavbar}>
                <Link to="/" className="Link">
                  Home
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/favourite" className="Link">
                  Favourite
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/readlater" className="Link">
                  Read later
                </Link>{" "}
              </li>
              <li onClick={data.handleHideNavbar}>
                <Link to="/about" className="Link">
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
