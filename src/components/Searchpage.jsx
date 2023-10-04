import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import Book from '../components/Book'
import './Topbar.css'
import './Searchpage.css'
import { useContext,useState,useEffect } from "react";
import { Link } from 'react-router-dom';
export default function Searchpage() {
    const data = useContext(Context);

  const handleCategories=(option)=>{
    let filterdbooks=data.convertedSearch.filter((book)=>book.volumeInfo?.categories?.includes(option))
    data.setSearch(filterdbooks)
  }



  return (
    <div>
      
        <Dialog
        open={data.opensearch}
        onClose={data.handleClose2}
        fullWidth
        maxWidth="md"
      >
       
        <DialogTitle style={{ textAlign: "center" }}>
        <div className="search">
        <select>
          <option value="">All</option>
          <option value="fictional" onClick={()=>handleCategories('Fictional')}>fictional</option>
          <option value="Computers"onClick={()=>handleCategories('Computers')}>Computers</option>
          <option value="Language Arts & Disciplines" onClick={()=>handleCategories('Language Arts & Disciplines')}>Language Arts & Disciplines</option>
          <option value="Religion" onClick={()=>handleCategories('Religion')}>Religion</option>
          <option value="Cooking" onClick={()=>handleCategories('Cooking')}>Cooking</option>
          <option value="Technology"onClick={()=>handleCategories('Technology')}>Technology</option>
          <option value="Biography"onClick={()=>handleCategories('Biography')}>Biography</option>
          <option value="Drama" onClick={()=>handleCategories('Drama')}>Drama</option>




        </select>
        <input
          type="text"
          placeholder="Search..."
          value={data.text}
          onChange={(e)=>data.setText(e.target.value)}
        ></input>
      </div>
        </DialogTitle>
        {data.text==='' ?
       <div class="lds-default2"><div></div><div></div><div></div><div>
       </div><div></div><div></div><div></div><div></div><div></div>
       <div></div><div></div><div></div></div>
:<DialogContent>
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
            return <div key={result.id} className='res-book'>
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
      }
        
        
      </Dialog>
    </div>
  )
}
