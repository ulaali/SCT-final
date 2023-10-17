import React from "react";
import Book from "../../components/Book";
import Qouts from "../../components/Quots";
import Context from "../../Data";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const data = useContext(Context);
  const time = new Date();

  return (
    <div style={{ backgroundColor: "#F3F3F7" }} className="home-com">
      <div className="hero">
        <div className="intro">
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
            <div className="btns">
              {data.isAuth ? (
                <button className="signin-hero" onClick={data.signUserOut}>
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    className="signin-hero"
                    onClick={data.handleClickOpen1}
                  >
                    Sign Up
                  </button>
                </>
              )}
              <button className="search-btn" onClick={data.handleFocus}>
                Search Now!
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/logo.png" alt="logo"></img>
          </div>
        </div>
        <div>
          <Qouts />
        </div>
      </div>

      <div className="home">
        <div className="greeting">
          {time.toLocaleTimeString().includes("PM") ? (
            <h1>Good Afternoon</h1>
          ) : (
            <h1>Good Morning</h1>
          )}
        </div>
        <div className="carousels">
          <h2>Recent Books</h2>

          <Carousel responsive={data.responsive}>
            {data.loading ? (
              <div class="lds-default">
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
              </div>
            ) : (
              data.convertedLatest.map((book) => {
                let prop = {
                  image: book.image,
                  // width={book.book_image_width}
                  // height={book.book_image_height}
                  author: book.author,
                  title: book.title,
                  rate: "4.5/5",
                  description: book.description,
                  url: book.url,
                  book: book,
                  id: book.id,
                  publisher: book.publisher,
                };
                return (
                  <div key={book.id} className="carsoel">
                    <Link
                      to='/preview'
                      state={prop}
                      style={{ textDecoration: "none" }}
                    >
                      <Book
                        image={book.image}
                        author={book.author}
                        title={book.title}
                        rate="4.5/5"
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </Carousel>
          <h2>Most Famouse Books</h2>

          <Carousel responsive={data.responsive}>
            {data.loading ? (
              <div class="lds-default">
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
              </div>
            ) : (
              data.convertedFamous.map((book, index) => {
                let prop = {
                  image: book.image,
                  author: book.author,
                  title: book.title,
                  rate: "4.5/5",
                  description: book.description,
                  book: book,
                  id: book.id,
                  publisher: book.publisher,
                };
                return (
                  <div key={book.id}>
                    <Link
                      to='/preview'
                      state={prop}
                      style={{ textDecoration: "none" }}
                    >
                      <Book
                        image={book.image}
                        height={445}
                        author={book.author}
                        title={book.title}
                        rate="4.5/5"
                        key={index}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </Carousel>

          <h2>Explore Articles</h2>
          <Carousel responsive={data.responsive}>
            {data.loading ? (
              <div class="lds-default">
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
              </div>
            ) : (
              data.convertedArticle.map((article, index) => {
                let prop = {
                  image: article.image,
                  height: 445,
                  author: article.author,
                  title: article.title,
                  rate: "4.5/5",
                  description: article.description,
                  url: article.url,
                  book: article,
                  id: article.id,
                };
                return (
                  <div key={article.id}>
                    <Link
                      to='/preview'
                      state={prop}
                      style={{ textDecoration: "none" }}
                    >
                      <Book
                        image={article.image}
                        height={400}
                        author={article.author}
                        title={article.title}
                        rate="4.5/5"
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
