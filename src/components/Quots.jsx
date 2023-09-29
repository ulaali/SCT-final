import React from 'react'
import { useEffect,useState } from 'react';
import '../pages/home/Home.css'
export default function Quots() {
    const qouts=[{
     q:`A rose by any other name would smell as sweet `,
     says:'-William Shakespeare'
    },{
        q:'Ask, and it shall be given you; seek, and you shall find',
        says:` -The Bible`
    },{
        q:'I have always depended on the kindness of strangers.',
        says:'-Blanche Dubois'

    }]
    const [randomData, setRandomData] = useState({});

    const getRandomObject = (array) => {
      const randomObject = array[Math.floor(Math.random() * array.length)];
      setRandomData(randomObject);
    };
  
    useEffect(() => {
      getRandomObject(qouts);
    }, []);
  return (
    <div className='qouts'>
     <h1>Today's Quots</h1>
       <p>"{randomData.q}"</p>
       <p>{'    '}{randomData.says}</p>

     
    </div>
  )
}
