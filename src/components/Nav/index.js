import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav() {
 


    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="home"> </span> HOME
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
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
                    
                    <li>
                        <span>Contact</span>
                    </li>
                    
                    </ul>
                  </nav>
                </header>
              );
            }

export default Nav;