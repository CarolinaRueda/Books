import React from "react";
import "./MapBooks.css";
import { Link } from "react-router-dom";

const MapBooks = ({ books, onAction, currentPage, page }) => {
  return (
    <div className='books-group'>
      {books.map((book, idx) => (
        <div key={idx} className='info-book bck'>
          <div className='letters-book bck'>
            <p className='title-b bck' id={book.title}>
              {book.title}
            </p>
            <p className='bck italic font'>{book.authors}</p>
            {book.series ? (
              <p className='bck font'>
                <span className='bold bck'>Serie: </span>
                {book.series}
              </p>
            ) : (
              ""
            )}
            <p className='bck font'>
              <span className='bold bck'>Pages: </span>
              {book.pages}
            </p>
            {page === "books" ? (
              <div className='buttons'>
                <p onClick={() => onAction(book)}>
                  <i
                    className='fa-solid fa-check'
                    style={{ backgroundColor: "transparent" }}
                  ></i>
                  Add to completed.
                </p>
              </div>
            ) : (
              <div>
                <p onClick={() => onAction(book)}>
                  <i
                    className='fa-solid fa-xmark'
                    style={{ backgroundColor: "transparent" }}
                  ></i>{" "}
                  Delete from completed.
                </p>
              </div>
            )}
          </div>
          <div className='bck'>
            <Link
              to={`/allbooks/books/${currentPage}/${book.title.replace(
                "?",
                "-sign-"
              )}`}
            >
              <img
                id={book.title}
                className='image'
                src={book.img}
                alt={book.title}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapBooks;
