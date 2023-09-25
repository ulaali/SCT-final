import React from 'react'
import Context from "../Data";
import { useContext } from "react";
import Book from './Book';
import { Link } from 'react-router-dom';

export default function Favourite() {
  const data = useContext(Context);

  return (
    <div>
      {
        data.fav.map((book)=>{
        return  <Link to='/preview' style={{textDecoration:'none'}}>

                  <Book
                    image={book.image}
                    // width={book.book_image_width}
                    // height={book.book_image_height}
                    author={book.author}
                    title={book.title}
                    rate="4.5/5"
                  /></Link>
        })
      }
    </div>
  )
}
