import React from "react";
import "./Completed.css";
// import Pagination from "../Pagination/Pagination.js";
import MapBooks from "../AllBooks/Books/MapBooks";
import imgSad from "../../utilities/triste.png";

const Completed = ({
  completes,
  onRemove,
  page,
  currentPage,
  paginate,
  pageNumbers,
}) => {
  return (
    <div className='completedCont'>
      {!Array.isArray(completes) ? (
        <>
          <h1 className='title'>{completes}</h1>
          <p className='textCom'>
            Please, if you want to see books here, add them directly from All
            Books
          </p>
          <img src={imgSad} alt={imgSad} />
        </>
      ) : (
        <div>
          <h1 className='title'>Your completed list:</h1>
          <MapBooks
            books={completes}
            onAction={onRemove}
            page={page}
            currentPage={currentPage}
          />
          {/* <Pagination
            pageNumbers={pageNumbers}
            paginate={paginate}
            page={page}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Completed;
