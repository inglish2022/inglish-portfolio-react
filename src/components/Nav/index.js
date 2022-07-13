import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav() {
 


    return (
     
            <nav>
                <ul className="flex-row">
                    {/* <li className='inglish' id ='title'>
                        <a href="#about">
                            INGLISH FOUST
                        </a>
                    </li> */}
             
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
                            Contact
                            </a>
                    </li>
                    
                    </ul>
                  </nav>
              );
            }

export default Nav;