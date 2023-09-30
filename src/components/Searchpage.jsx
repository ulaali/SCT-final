import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import Book from '../components/Book'
import axios from "axios";
import './Topbar.css'
import { useContext,useState,useEffect } from "react";
import { Link } from 'react-router-dom';
export default function Searchpage() {
    const data = useContext(Context);
    const [search, setSearch] = useState({});
    const [text, setText] = useState('');

    useEffect(()=>{
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
      .then((res) => res.json())
      .then((res) => {
        setSearch(res);
        
      })
    },[text])
console.log(search);
  return (
    <div>
      
        <Dialog
        open={data.opensearch}
        onClose={data.handleClose2}
        // style={{ width: "700px"}}
      >
       
        <DialogTitle style={{ textAlign: "center" }}>
        <div className="search">
        <select>
          <option value="">All</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor">Indoor</option>
          <option value="Aquatics">Aquatics</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></input>
      </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Search Results Here */}
          </DialogContentText> 
          {search?.items?.map((result,index)=>{
            let prop={
              image:result.volumeInfo?.imageLinks?.smallThumbnail,
              // width={book.book_image_width}
              // height={book.book_image_height}
              author:result.volumeInfo?.authors?.map((author) => {
                return author;
              }),
              title:result.volumeInfo?.title,
              rate:"4.5/5",
              description:result.volumeInfo?.description,
              url:result.volumeInfo?.previewLink,
              category:result.volumeInfo?.categories,
              book:result.volumeInfo,
              id:result.id,
              publisher:result.volumeInfo?.publisher
            };
            return <div key={result.id}>
            <Link to='/preview'  state={prop} style={{textDecoration:'none'}} onClick={data.handleClose2}>

             <Book
               image={result.volumeInfo?.imageLinks?.smallThumbnail}
               // width={result.result_image_width}
               // height={result.result_image_height}
               author={result.volumeInfo?.authors?.map((author) => {
                return author;
              })}
               title={result.volumeInfo?.title}
               rate="4.5/5"
               key={index}
             /></Link>
           </div>
          })}
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
