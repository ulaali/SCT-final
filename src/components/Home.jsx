import React from 'react'
import Layout from './Layout'
import logo from '../assets/logo.png'
import Context  from '../Data';
import Book from './Book'
import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css'
export default function Home() {
  const data = useContext(Context);
  
  return (
    <div style={{backgroundColor:'#F3F3F7'}}>
      <Layout>
        <div className='hero'>
          <div>
          <h1>Explore Hubdreds Of Free<br/> Books Online</h1>
          <button>Search</button>
          </div>
          <div>
          <img src={logo} style={{width:'200px',height:"200px"}}/>
          </div>
        </div>
        <div className='home'>
           <div>
          {data.time.toLocaleTimeString().includes('PM')?<h1>Good Evening</h1>:<h1>Good Morning</h1>}
        </div>
         <p>Recent Books</p>
           <Carousel responsive={data.responsive}>
            
            {data.Latest?.results?.books?.map((book)=>{
           return <div><Book image={book.book_image} width={book.book_image_width}  height={book.book_image_height} author={book.author} title={book.title} rate='4.5/5'/>
           </div>
           })}
           
            
            
           </Carousel>
           
        </div>
       
      </Layout>
    </div>
  )
}
