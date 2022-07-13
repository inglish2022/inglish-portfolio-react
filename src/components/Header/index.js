import React from 'react';
import Nav from "../Nav";





function Header() {

  return (
    <header className="header" id="myHeader">
      <div className='logo'>
        <h1>
          <a href="#about">Inglish Foust</a>
        </h1>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;