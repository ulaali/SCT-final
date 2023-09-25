import React from "react";
import logo from "../assets/logo.png";
import Book from "./Book";
import Context from "../Data";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import { Link} from "react-router-dom";
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
              let prop={
                image:book.image,
                // width={book.book_image_width}
                // height={book.book_image_height}
                author:book.author,
                title:book.title,
                rate:"4.5/5",
                description:book.description,
                url:book.url,
                book:book
              }
              
              return (
                <div>
                 <Link to='/preview' state={prop} style={{textDecoration:'none'}}>

                  <Book
                    image={book.image}
                    // width={book.book_image_width}
                    // height={book.book_image_height}
                    author={book.author}
                    title={book.title}
                    rate="4.5/5"
                  /></Link>
                </div>
              );
            })}
        </Carousel>

        <h2>Most Famouse Books</h2>

        <Carousel responsive={data.responsive}> 
          {
            data.convertedFamous.map((book) => {
              let prop={
                image:book.image,
                // width={book.book_image_width}
                // height={book.book_image_height}
                author:book.author,
                title:book.title,
                rate:"4.5/5",
                description:book.description,

              }
              return (
                <div>
                   <Link to='/preview' state={prop} style={{textDecoration:'none'}}>
                  <Book
                    image={book.image}
                    height={445}
                    author={book.author}
                    title={book.title}
                    rate="4.5/5"
                  /></Link>
                </div>
              );
            })} 
         </Carousel>

        <h2>Explore Articles</h2>
        <Carousel responsive={data.responsive}> 
           {
            data.convertedArticle.map((article) => {
              let prop={
                image:article.image,
                height:445,
                author:article.author,
                title:article.title,
                rate:"4.5/5",
                description:article.description,
                url:article.url

              }
              return (
                <div>
                <Link to='/preview' state={prop} style={{textDecoration:'none'}}>
                <Book
                    image={article.image}
                    height={445}
                    author={article.author}
                    title={article.title}
                    rate="4.5/5"
                  />
                </Link> 
                </div>
              );
            })} 
         </Carousel>
      </div>
    </div>
  );
}
