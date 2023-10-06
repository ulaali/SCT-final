import React from "react";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Context from "../../Data";
import { useContext } from "react";
import accept from "../../assets/accept.png";
import { Button } from "@mui/material";
import heart from "../../assets/heart.png";
import heartless from "../../assets/heartless.png";
import "./preview.css";
import CommentsSection from "../../components/CommentsSection";
export default function Preview() {
  const location = useLocation();
  const data = useContext(Context);
  const prop = location.state;

  return (
    <div className="preview">
      <div className="content">
        <img src={prop.image} className="book-image" alt="book cover" />
        <div>
          <h1>{prop.title}</h1>
          <p>By: {prop.author}</p>
          <p>second Edition</p>
          <div className="Rating">
            <Rating
              className="Rating"
              name="simple-controlled"
              value={data.value}
              onChange={(event, newValue) => {
                data.setValue(newValue);
              }}
            ></Rating>
            <span> {data.value}/5</span>
          </div>
          <p style={{ fontWeight: "bold" }}>Availablity:</p>
          <p>
            <img
              src={accept}
              style={{ width: "2%", height: "2%" }}
              alt="accept"
            />{" "}
            E-book
          </p>
          <p>
            <img
              src={accept}
              style={{ width: "2%", height: "2%" }}
              alt="accept"
            />{" "}
            hard cover
          </p>
          <p>
            <img
              src={accept}
              style={{ width: "2%", height: "2%"}}
              alt="accept"
            />{" "}
            audio book
          </p>

          
          <div className="btns">
          
            {data.favchecker(prop.id) ? (
              <img
                onClick={() => {
                  data.isAuth?
                  data.removefav(prop.id)
                  :alert('you need to sign up first')
                }}
                src={heart}
                style={{ width: "3%", height: "3%",cursor:'pointer' }}
                alt="heart"
              />
            ) : (
              <img
                onClick={() => {
                  data.isAuth?
                  data.addfav(prop.book)
                  :alert('you need to sign up first')
                }}
                src={heartless}
                style={{ width: "3%", height: "3%",cursor:'pointer' }}
                alt="heartless"
              />
            )}
            
            {data.Readlaterchecker(prop.id) ? (
              <Button
                variant="outlined"
                style={{ color: "#F4683C", border: "1px solid #F4683C" }}
                onClick={() => {
                  data.removeRead(prop.id)
                  console.log(prop.id);
                }}
              >
                Remove From Read Later
              </Button>
            ) : (
             
              <Button
                variant="outlined"
                style={{ color: "#F4683C", border: "1px solid #F4683C" }}
                onClick={() => 
                  data.isAuth?
                  data.addReadLater(prop.book):alert('you need to sign in first')}
              >
                Add to Read Later
              </Button>

            )}
            <Button
            variant="contained"
            style={{ backgroundColor: "#F4683C", marginRight: "20px" }}
            href={prop.url}
          >
            Read Now
          </Button>
          </div>
        </div>
      </div>
      <div className="desc">
        <h4>What is it About?</h4>
        <p>{prop.description}</p>
        <CommentsSection bookTitle={prop.title}/>
      </div>
    </div>
  );
}
