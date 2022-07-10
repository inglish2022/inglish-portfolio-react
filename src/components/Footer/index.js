import React from 'react';
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/inglish2022" target="blank">
            <li>
              <FaGithub style={{color: 'black', fontSize: '50px'}} />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/inglish-webster-foust" target="blank">
            <li>
              <FaLinkedin style={{color: 'blue', fontSize: '50px'}} />
            </li>
         
          </a>
          <a href="https://www.instagram.com/inglishf/" target="blank">
            <li>
              <FaInstagramSquare style={{color: 'black', fontSize: '50px'}} />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;