import * as React from 'react'
import { useContext,useEffect,useState } from 'react';
import './Topbar.css'
import Context  from '../Data';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { deepOrange } from '@mui/material/colors';

export default function Topbar() {
  const data = useContext(Context);
  
  return (
    <div className='Topbar'>
     <div className='search'>

        <select>
         <option value="">All</option>
         <option value="Outdoor">Outdoor</option>
         <option value="Indoor">Indoor</option>
         <option value="Aquatics">Aquatics</option>
      </select>
      <input type='text' placeholder='Search'></input>
     </div>
        <p><AccessTimeIcon sx={{ color: deepOrange[600] }} fontSize='small'/> {data.time.toLocaleTimeString()}    <CalendarMonthIcon sx={{ color: deepOrange[600] }} fontSize='small'/> {data.date.toLocaleDateString()}</p>
        <button className='signin'>Sign in</button>
    </div>
  )
}
