import "./AllBooks.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../utilities/info";
import Books from "./Books/Books";
import Completed from "../Completed/Completed";
import Pagination from "../Pagination/Pagination";

const AllBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9);
  const [completes, setCompletes] = useState([]);

  const handleComplete = (book) => {
    if (completes.includes(book)) return;
    setCompletes((prev) => [book, ...prev]);
  };

  const handleRemoveComplete = (book) => {
    setCompletes(completes.filter((comp) => comp.title !== book.title));
  };

  const { page } = useParams();

  // Get current books

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  if (page === "completed") {
    for (let i = 1; i <= Math.ceil(completes.length / booksPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className='book-group'>
      {page === "books" ? (
        <>
          <div>
            <Books
              books={currentBooks}
              currentPage={currentPage}
              onComplete={handleComplete}
              onRemove={handleRemoveComplete}
              page={page}
            />
          </div>
          <Pagination pageNumbers={pageNumbers} paginate={paginate} />
        </>
      ) : (
        <Completed
          completes={
            completes.length >= 1
              ? completes
              : "There's no books completed yet."
          }
          onRemove={handleRemoveComplete}
          currentPage={currentPage}
          page={page}
          pageNumbers={pageNumbers}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default AllBooks;
