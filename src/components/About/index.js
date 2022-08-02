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

        <p>I am working towards the end of my journey in school at Butler University as a web developer. I have worked with front-end and back-end developing. I do not have many
                projects under my belt but I will work very hard at any project I start.</p>
        <p> By the end of my coding bootcamp I will have the practical, technical skills that will enable me to
                build great web applications. I will be proficient in many technoligies, including JavaScript, Node,
                SQL, MongoDB, and React.</p>

        
         
          Cheers!

        
      </div>
    </section>
  );
}

export default About;