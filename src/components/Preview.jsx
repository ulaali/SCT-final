import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Preview() {
    const location=useLocation();
    const prop=location.state;
  return (
    <div>
        <img src={prop.image}/>
    </div>
  )
}
