import * as React from "react";
import { useContext } from "react";
import "./Topbar.css";
import Signin from "./Signin";
import Context from "../Data";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { deepOrange } from "@mui/material/colors";
import Searchpage from "./Searchpage";
export default function Topbar() {
  const data = useContext(Context);

  return (
    <div className="Topbar">
      <div className="search">
        <select>
          <option value="">All</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor">Indoor</option>
          <option value="Aquatics">Aquatics</option>
        </select>
        <Signin />

        <input
          type="text"
          placeholder="Search..."
          ref={data.inputRef}
          onClick={data.handleClickOpen2}
        ></input>
        <Searchpage />
      </div>
      <p>
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
  );
}
