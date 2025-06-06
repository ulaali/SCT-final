import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import '../pages/home/Home.css'
import { db, auth } from "../firbaseConfig";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query
} from "firebase/firestore";
import "./Comments.css";
import Context from "../store/Data";
import { useContext } from "react";
import { useAuthStore } from "../store/auth";

export default function CommentsSection({ bookTitle }) {
  const [newcomment, setNewcomment] = useState("");
  const [comments, setComments] = useState([]);
  const messagesRef = collection(db, "comments");
  const data = useContext(Context);
  const queryComments = query(messagesRef,where('bookTitle',"==", bookTitle));
  const SigninStore = useAuthStore((state) => state);

  useEffect(() => {
   const unsuscribe= onSnapshot(queryComments, (data) => {
      let comments = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setComments(comments);
    });

    return () => unsuscribe();
  }, [messagesRef]);

  const handleAlert = () => {
    alert("you need to sign up first");
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(messagesRef, {
      text: newcomment,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      bookTitle,
    });
    setNewcomment("");

  };


  return (
    <div className="chat-app">
      {
      comments.length >0?comments.map((comment,index) => {
        return (
          <div className="comment" key={index}>
            <div className="avatar">
              <Avatar alt={comment.user} src="/static/images/avatar/1.jpg"/>
            </div>
            <div>
              <h4>{comment.user}</h4>
              <p>{comment.text}</p>
            </div>
          </div>
        );
      }): comments.length !==0?   <div class="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>:''
      
      
      }
     
      
      <form
        onSubmit={handleSubmit}
        className="new-comment-form"
      >
        <Avatar
          alt={comments.user}
          src="/static/images/avatar/1.jpg"
          className="avatar2"
        />

        <input
          placeholder="Add Comment here..."
          className="new-comment-input"
          onChange={(e) => setNewcomment(e.target.value)}
          value={newcomment}
          onClick={SigninStore.isAuth ? ()=>'' : handleAlert}
        />
        <button className="comment-button" type={SigninStore.isAuth? 'submit':'button'} onClick={SigninStore.isAuth ? ()=>'' : handleAlert}>
          Comment
        </button>
      </form>
    </div>
  );
}
