import React from 'react'
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
         <h2>Recent Books</h2>
         
           <Carousel responsive={data.responsive}> 
            {data.Latest?.results?.books?.map((book)=>{
           return <div><Book image={book.book_image} width={book.book_image_width}  height={book.book_image_height} author={book.author} title={book.title} rate='4.5/5'/></div>
           })}
           </Carousel>


           <h2>Most Popular Articles</h2>
           <Carousel responsive={data.responsive}>
            {data.articles?.results?.map((article)=>{
           return <div><Book   author={article.media.map((author)=>(author.copyright))} title={article.title} rate='4.5/5'/></div>
           })}
           </Carousel>
        </div>
      
    </div>
  )
}
