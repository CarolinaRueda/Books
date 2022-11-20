import React, { useState } from "react";
import "./Header.css";
import logo from "../../utilities/logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);

  const change = () => {
    setShow(false);
  };
  return (
    <div className='header'>
      <div className='info-page'>
        <Link to='/'>
          <img
            src={logo}
            alt={logo}
            className='logo'
            style={{ width: "100px" }}
            onClick={() => setShow(true)}
          />
        </Link>
        <Link to='/' onClick={() => setShow(true)} className='links title'>
          <h2>A lot of Books</h2>
        </Link>
        <NavLink to='/homepage' className='links hov' onClick={change}>
          Home Page
        </NavLink>
        <NavLink to='/allbooks/books' className='links hov' onClick={change}>
          All Books
        </NavLink>
        <NavLink
          to='/allbooks/completed'
          className='links hov'
          onClick={change}
        >
          Completed
        </NavLink>
      </div>
      <div>
        {show ? (
          <div className='welcome'>
            <h2>Welcome to A Lot of Books</h2>
            <p>A site with a wide variety of books.</p>
            <p>
              Where you can read the synopsis, find out if a book belongs to a
              saga,
            </p>
            <p>discover the year it was published.</p>
            <p>Explore comfortably, we all like to read here.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
