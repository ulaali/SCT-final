import React from "react";
import "./About.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Context from "../../store/Data";
import { useContext } from "react";

export default function About() {
  const data = useContext(Context);

  return (
    <div className="about">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 95.20574162679424,396.87081339712915 190.41148325358847,443.74162679425837 293,426 C 395.5885167464115,408.25837320574163 505.5598086124403,325.9043062200957 606,271 C 706.4401913875597,216.0956937799043 797.3492822966506,188.64114832535887 892,225 C 986.6507177033494,261.35885167464113 1085.043062200957,361.5311004784689 1177,393 C 1268.956937799043,424.4688995215311 1354.4784688995214,387.23444976076553 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="#f4683c"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 350)"
        ></path>
      </svg>
      <div className="about-text">
        <h1 style={{ fontSize: "3rem" }}>About Us</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Here is your online Library <br />
          Free books, great discussions Where you
          <br /> can space out without any regrets
        </p>
      <Link to='/' style={{textDecoration:'none'}}><Button variant="contained" style={{ color: "#F4683C" ,backgroundColor:'white'}}>Home</Button></Link> 
      <div className="rights">
        <img src='/assets/copyright.png' style={{width:'7%',height:'7%',padding:'10px'}} alt="copyrights"/>
        <h3> All rights reserved</h3>
        </div> 
      </div>
    </div>
  );
}
