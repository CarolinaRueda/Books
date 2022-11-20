import "./HomePage.css";
import { books } from "../../utilities/info";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [isReadMore, setIsReadMore] = useState(true);

  const randomizer = () => {
    setCount(Math.ceil(Math.random() * books.length - 1));
  };

  const back = () => setCount((prev) => prev - 1);
  const next = () => setCount((prev) => prev + 1);

  const sinopsis = books[count].sinopsis;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className='container'>
      <div className='book'>
        <div className='book-info'>
          <button
            onClick={back}
            disabled={count === 0 ? true : false}
            className='prueba'
          >
            <i
              className='fa-solid fa-caret-left'
              style={{ backgroundColor: "#827081ff" }}
            ></i>
          </button>
          <div className='letters'>
            <h2>{books[count].title}</h2>
            <h4 className='author'>{books[count].authors}</h4>
            <p>
              {isReadMore ? sinopsis.slice(0, 300) : sinopsis}
              <span onClick={toggleReadMore} className='read-or-hide'>
                {isReadMore ? "...Read More" : " Show Less"}
              </span>
            </p>
          </div>
          <div className='imagen'>
            <img src={books[count].img} alt={books[count].title} />
          </div>
          <button
            onClick={next}
            disabled={count === books.length - 1 ? true : false}
          >
            <i
              className='fa-solid fa-caret-right'
              style={{ backgroundColor: "#827081ff" }}
            ></i>
          </button>
        </div>
      </div>
      <div className='buttons'>
        <button className='page' onClick={randomizer}>
          {count + 1}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
