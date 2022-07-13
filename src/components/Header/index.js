import React from 'react';
// import Nav from "../Nav";





function Header() {


return(
<header className="header" id="myHeader">
<div className='logo'>
  <h1>
    <div>
      <ul className="flex-row">
        <div>
          <li>
            <a href="https://github.com/inglish2022">
              INGLISH FOUST
              
            </a>
          </li>
        </div>
        <div className='flex-row'>
          <li className='mx-2'>
            <a href="#about">
              ABOUT ME
            </a>
          </li>
          <li className='mx-2'>
            <a href="#resume">
              RESUME
            </a>
          </li>
          <li className='mx-2'>
            <a href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact-form">
              CONTACT
            </a>
          </li>
        </div>
      </ul>
    </div>
  </h1>
</div>
</header>
);
}

export default Header;