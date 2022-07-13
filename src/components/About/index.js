import React from 'react';
import Profile from "../../assets/profile.jpg"
// import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


function About() {

  return (
    <section className="about" id="about">
         <div>
        <img src={Profile} alt="profile" className="profile float-left"></img>
      </div>
      <div className="mt-3">

        <p>I am working towards the end of my journey as a developer. I have worked with front-end and back-end developing. I do not have many
                projects under my belt but I will work very hard at any project I start.</p>
        <p> By the end of my coding bootcamp I will have the practical, technical skills that will enable me to
                build great web applications. I will be proficient in many technoligies, including JavaScript, Node,
                SQL, MongoDB, and React.</p>

        {/* <p>
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
          </a> */}
         
          Cheers!

        
      </div>
    </section>
  );
}

export default About;