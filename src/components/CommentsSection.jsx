import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';

import { db, auth } from "../firbaseConfig";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import './Comments.css'



export default function CommentsSection({book}) {
    const [newcomment, setNewcomment] = useState('');
    const [comments, setComments] = useState([])
    const messagesRef = collection(db, "comments");


    useEffect(() => {
        const queryComments = query(messagesRef );
        onSnapshot(queryComments, (data) => {
            let comments=data.docs.map((doc) => {
          return ( { ...doc.data(), id: doc.id })
          });
          setComments(comments);
        });
    
        // return () => unsuscribe();
      }, []);





    const handleSubmit =async (e)=>{
        e.preventDefault();
        await addDoc(messagesRef, {
            text: newcomment,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            book,
          }
          
          );
          setNewcomment('')
    }

    // console.log(comments);

  return (
    <div
    className='chat-app'
    >
        {comments.map((comment)=>{
          return <div className='comment'>
            <div className='avatar'><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
          <div>
          <h4>{comment.user}</h4>
          <p>{comment.text}</p>
          </div>  
          </div> 
        })}
         {/* <div className="messages">
        {comments.map((item) => (
          <div key={item.id} className="message">
            <span className="user">{item.user}:</span> {item.text}
          </div>
        ))}
      </div> */}
        <form onSubmit={handleSubmit} className="new-comment-form">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className='avatar2' />

            <input placeholder='Add Comment here...' className='new-comment-input' onChange={(e)=>setNewcomment(e.target.value)} value={newcomment}/>
            <button className='comment-button' type='submit'>Comment</button>
        </form>
        </div>
  )
}
