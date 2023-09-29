import React from "react";
import Context from "../../Data";
import { useContext } from "react";
import Book from "../../components/Book";
import { Link } from "react-router-dom";
import './favourite.css'
export default function Favourite() {
  const data = useContext(Context);

  return (
    <div className="readlater">
      <h1>Your Favourite Books</h1>
<div className="favpage">
      {data.fav.map((book) => {
        let prop = {
          image: book.image,
          // width={book.book_image_width}
          // height={book.book_image_height}
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
              // width={book.book_image_width}
              // height={book.book_image_height}
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
