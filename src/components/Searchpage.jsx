import React, {useMemo } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Context from "../Data";
import Book from "../components/Book";
import "./Topbar.css";
import "./Searchpage.css";
import { useContext } from "react";
import debounce from 'lodash.debounce';
import { Link } from "react-router-dom";
export default function Searchpage() {
  const data = useContext(Context);
  const handleChange = (e) => {
    data.setText(e.target.value);
  };  
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  return (
    <div>
      <Dialog
        open={data.opensearch}
        onClose={data.handleClose2}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={{ textAlign: "center" }}>
          <div className="search search-page">
            <select
              onChange={(e) => data.setCategory(e.target.value)}
              value={data.categoryy}
            >
              <option value={""}>All</option>
              <option value="fictional">fictional</option>
              <option value="Computers">Computers</option>
              <option value="Language Arts & Disciplines">
                Language Arts & Disciplines
              </option>
              <option value="Religion">Religion</option>
              <option value="Cooking">Cooking</option>
              <option value="Technology">Technology</option>
              <option value="Biography">Biography</option>
              <option value="Drama">Drama</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              onChange={debouncedResults}
            ></input>
          </div>
        </DialogTitle>
        {data.text === "" ? (
          <div class="lds-default2">
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
          <DialogContent>
            <div className="res-books">
              {data.search?.items?.map((book, index) => {
                let prop = {
                  image: book.volumeInfo?.imageLinks?.smallThumbnail,
                  author: book.volumeInfo?.authors
                    ? book.volumeInfo?.authors?.map((author) => {
                        return author;
                      })
                    : "No author Provided",
                  title: book.volumeInfo?.title,
                  rate: "4.5/5",
                  description: book.volumeInfo?.description
                    ? book.volumeInfo?.description
                    : "No description provided",
                  url: book.volumeInfo?.previewLink,
                  book: book,
                  id: book.id,
                };

                return (
                  <div key={book.id} className="res-book">
                    <Link
                      to={`/preview/${book.volumeInfo?.title}`}
                      state={prop}
                      style={{ textDecoration: "none" }}
                      onClick={data.handleClose2}
                    >
                      <Book
                        image={book.volumeInfo?.imageLinks?.smallThumbnail}
                        author={
                          book.volumeInfo?.authors
                            ? book.volumeInfo?.authors?.map((author) => {
                                return author;
                              })
                            : "No author Provided"
                        }
                        title={book.volumeInfo?.title}
                        rate="4.5/5"
                        key={index}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
