import React from "react";
import Context from "../../Data";
import { useContext } from "react";
import Book from "../../components/Book";
import { Link } from "react-router-dom";
import './favourite.css'
export default function Readlater() {
  const data = useContext(Context);

  return (
    <div className="readlater">
            <h1>Your Read Later Books</h1>
 
   <div className="favpage">
    {
      !data.readlater[0]? <p>No Read later books yet</p>: (data.readlater.map((book,index) => {
        let prop = {
         image:(book.volumeInfo?.imageLinks?.smallThumbnail) || (book.image),
         author:(book.author) || (book.volumeInfo?.authors ? book.volumeInfo?.authors?.map((author) => {
           return author}):'No author Provided'),
         title: (book.volumeInfo?.title) || (book.title),
         rate: "4.5/5",
         description:(book.description) || (book.volumeInfo?.description ? book.volumeInfo?.description:'No description provided'),
         url: (book.volumeInfo?.previewLink) || (book.url),
         book: book,
         id:book.id,
        };
        return (
          <Link key={index} to={`/preview/${book.id}`} style={{ textDecoration: "none" ,marginTop:'50px',marginLeft:'50px'}} state={prop} >
            <Book
              image={(book.volumeInfo?.imageLinks?.smallThumbnail) || (book.image)}
              author={(book.author) || (book.volumeInfo?.authors ? book.volumeInfo?.authors?.map((author) => {
                return author}):'No author Provided') }
              title={(book.volumeInfo?.title) || (book.title)}
              rate="4.5/5"
            >
   
            </Book>
          </Link>
        );
      }))

    }
   
 </div>

   
    </div>
  );
}
