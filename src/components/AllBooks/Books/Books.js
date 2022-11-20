import React from "react";
import "./Books.css";
import MapBooks from "./MapBooks";

// import { books } from "../../../utilities/info";

const Books = ({ books, currentPage, onComplete, page }) => {
  return (
    <div className='all'>
      <MapBooks
        books={books}
        currentPage={currentPage}
        onAction={onComplete}
        page={page}
      />
    </div>
  );
};

export default Books;
