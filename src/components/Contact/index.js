import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
                if (!errorMessage) {
                    setFormState({ ...formState, [e.target.name]: e.target.value });
                  }
              
          }  
      }
      
    //   console.log(formState);


    // JSX
    return (
        <section className = 'contact' id="contact">

<div className="myContact" id="myContact">
            <p>
          I am interested in learning about new opportunities and can
          be reached
          through this portfolio, by
          email:
          </p>
          
          <address>
                    1816 S 28th Street <br />
                    Terre Haute, In <br />
                    47803<br />
                    E: <a href="mailto:inglish.foust5@gmail.com">inglish.foust5@gmail.com</a>
                </address>

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
         
          Cheers!

        
      </div>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email}  name="email" onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>


        </section>
    );
}

export default ContactForm;