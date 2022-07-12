import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Inglish Foust</h2>
          <ul>
            <li>
              I would like to start my career in Web Development.  I am interested in React, Front-end and Back-end coding!
            </li>
          </ul>

          <div className="linkedin">
            <a href="https://www.linkedin.com/in/inglish-webster-foust">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>

          <a
            href="https://www.myperfectresume.com/me/inglish-foust"
            className="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;