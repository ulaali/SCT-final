import React from "react";
import logo from "../assets/logo.png";
import Book from "./Book";
import Context from "../Data";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
export default function Home() {
  const data = useContext(Context);
  
  return (
    <div style={{ backgroundColor: "#F3F3F7" }}>
      <div className="hero">
        <div>
          <h1>
            Explore Hundreds Of <span style={{ color: "#F4683C" }}>Free</span>
            <br /> Books Online
          </h1>
          <p>
            <span style={{ color: "#F4683C", fontSize: "1.5rem" }}>
              Space out{" "}
            </span>{" "}
            in our online library where you can read and explore the
            <br /> best and most famous books and articles
          </p>
          <button onClick={data.handleFocus}>Search Now!</button>
        </div>
        <div>
          <img src={logo} style={{ width: "200px", height: "200px" }} />
        </div>
      </div>
      <div className="home">
        <div>
          {data.time.toLocaleTimeString().includes("PM") ? (
            <h1>Good Evening</h1>
          ) : (
            <h1>Good Morning</h1>
          )}
        </div>
        <h2>Recent Books</h2>

        <Carousel responsive={data.responsive}>
          {
            data.convertedLatest.map((book) => {
              return (
                <div>
                  <Book
                    image={book.image}
                    // width={book.book_image_width}
                    // height={book.book_image_height}
                    author={book.author}
                    title={book.title}
                    rate="4.5/5"
                  />
                </div>
              );
            })}
        </Carousel>

        <h2>Most Famouse Books</h2>

        <Carousel responsive={data.responsive}> 
          {
            data.convertedFamous.map((book) => {
              return (
                <div>
                  <Book
                    image={book.image}
                    height={445}
                    author={book.author}
                    title={book.title}
                    rate="4.5/5"
                  />
                </div>
              );
            })} 
         </Carousel>

        <h2>Explore Articles</h2>
        <Carousel responsive={data.responsive}> 
           {
            data.convertedArticle.map((article) => {
              return (
                <div>
                  <Book
                    image={article.image}
                    height={445}
                    author={article.author}
                    title={article.title}
                    rate="4.5/5"
                  />
                </div>
              );
            })} 
         </Carousel>
      </div>
    </div>
  );
}
