import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import Book from '../components/Book'
import axios from "axios";
import './Topbar.css'
import './Searchpage.css'
import { useContext,useState,useEffect } from "react";
import { Link } from 'react-router-dom';
export default function Searchpage() {
    const data = useContext(Context);
   
   
  return (
    <div>
      
        <Dialog
        open={data.opensearch}
        onClose={data.handleClose2}
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
          value={data.text}
          onChange={(e)=>data.setText(e.target.value)}
        ></input>
      </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Search Results Here */}
          </DialogContentText> 
        <div className='res-books'>
        {data.convertedSearch.map((result,index)=>{
            let prop={
              image:result.image,
              // width={book.book_image_width}
              // height={book.book_image_height}
              author:result.author,
              title:result.title,
              rate:"4.5/5",
              description:result.description,
              url:result.url,
              // category:result.volumeInfo?.categories,
              book:result,
              id:index,
              publisher:result.publisher
            };
            return <div key={result.id} >
            <Link to='/preview'  state={prop} style={{textDecoration:'none'}} onClick={data.handleClose2}>

             <Book
               image={result.image}
               // width={result.result_image_width}
               // height={result.result_image_height}
               author={result.author}
               title={result.title}
               rate="4.5/5"
               key={index}
             /></Link>
           </div>
          })}

        </div>
          
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
