import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

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
import "./Comments.css";
import Context from "../Data";
import { useContext } from "react";

export default function CommentsSection({ book }) {
  const [newcomment, setNewcomment] = useState("");
  const [comments, setComments] = useState([]);
  const messagesRef = collection(db, "comments");
  const data = useContext(Context);

  useEffect(() => {
    const queryComments = query(messagesRef,where('book',"==", book));
   const unsuscribe= onSnapshot(queryComments, (data) => {
      let comments = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setComments(comments);
    });

    // return () => unsuscribe();
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
      book,
    });
    setNewcomment("");
  };


  return (
    <div className="chat-app">
      {comments.map((comment) => {
        return (
          <div className="comment">
            <div className="avatar">
              <Avatar alt={comment.user} src="/static/images/avatar/1.jpg" />
            </div>
            <div>
              <h4>{comment.user}</h4>
              <p>{comment.text}</p>
            </div>
          </div>
        );
      })}

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
          onClick={data.isAuth ? ()=>'' : handleAlert}
        />
        <button className="comment-button" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}
