import React from "react";
import Context from "../Data";
import { useContext } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import './favourite.css'
export default function Readlater() {
  const data = useContext(Context);

  return (
    <div className="readlater">
            <h1>Your Read Later Books</h1>
 
   <div className="favpage">
   {data.readlater.map((book) => {
     let prop = {
       image: book.image,
       author: book.author,
       title: book.title,
       rate: "4.5/5",
       description: book.description,
       url: book.url,
       book: book,
       id:book.id,
       publisher:book.publisher
     };
     return (
       <Link to="/preview" style={{ textDecoration: "none" ,marginTop:'50px',marginLeft:'50px'}} state={prop} >
         <Book
           image={book.image}
           author={book.author}
           title={book.title}
           rate="4.5/5"
           publisher={book.publisher}
         >

         </Book>
       </Link>
     );
   })}
 </div>

   
    </div>
  );
}
