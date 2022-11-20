import "./Pagination.css";
import { Link } from "react-router-dom";

import React from "react";

const Pagination = ({ pageNumbers, paginate, page }) => {
  return (
    <div>
      <div className='pagination'>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <Link
                to={`/allbooks/books/${number}`}
                onClick={() => {
                  paginate(number);
                }}
                style={{
                  backgroundColor: "#e3d0d8ff",
                  textDecoration: "none",
                  color: "#827081ff",
                }}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
