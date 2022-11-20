import React from "react";
import "./InfoBook.css";
import { books } from "../../../utilities/info";
import { useParams } from "react-router-dom";

const indexed = books.reduce((acc, el) => ({ ...acc, [el.title]: el }), {});

const InfoBook = () => {
  let { book } = useParams();
  book = book.replace("-sign-", "?");

  const currentBook = indexed[book];

  return (
    <div className='infoBook'>
      <div className='giantCont'>
        <h2 className='titleBook transform'>{currentBook.title}</h2>
        <div className='thisBook'>
          <div className='allOfBook'>
            <p className='italic little transform'>
              <span className='bold italic little'>Author: </span>
              {currentBook.authors}
            </p>
            {currentBook.series ? (
              <p className='itlaic little transform'>
                <span className='bold italic little'>Serie: </span>
                {currentBook.series}
              </p>
            ) : (
              ""
            )}

            <p className='italic little transform'>
              <span className='bold italic little'>Published: </span>
              {currentBook.published}
              <span className='bold little'> || </span>
              <span className='bold italic little'>Pages: </span>
              {currentBook.pages}
            </p>
            <p className='italic transform'>{currentBook.tags}</p>
            <p className='transform'>
              <i className='fa-solid fa-angles-left'></i>
              {currentBook.sinopsis}
              <i className='fa-solid fa-angles-right'></i>
            </p>
          </div>
          <div className='flex'>
            <img
              src={currentBook.img}
              alt={currentBook.title}
              className='imagenBook transform'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBook;
