import React from 'react';
import Nav from "../Nav";

function Header() {

    return (
      <header className="flex-row px-1">
        <div className="logo">
          <h1>
          <a href="/">Inglish Foust</a>
          </h1>
        </div>
        <Nav></Nav>
      </header>
    );
  }
  
  export default Header;