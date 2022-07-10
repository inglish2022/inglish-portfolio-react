import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav() {
 


    return (
        <header>
     
            <nav>
                <ul className="flex-row">
                    <li className='mx-2'>
                <a href="/">
                    HOME
                        </a>
                        </li>
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
                        <a href=".portfolio">
                            PORTFOLIO
                        </a>
                    </li>
                    
                    <li className="mx-2">
                        <a href="#contact-form">
                            Contact
                            </a>
                    </li>
                    
                    </ul>
                  </nav>
                </header>
              );
            }

export default Nav;