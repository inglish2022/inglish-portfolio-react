import React from 'react';

import TravelBlog from "../../assets/travelblog.png";
import IamIngish from "../../assets/portfolio.png";
import CodeQuiz from "../../assets/codequiz.png";
import RunBuddy from "../../assets/runbuddy.png";
import WeatherDashboard from "../../assets/weatherdashboard.png";
import TechBlog from "../../assets/techblog.png";
import TravelPlanner from "../../assets/travelplanner.png";
import NoteTaker from "../../assets/notetaker.png"
import WorkDaySched from "../../assets/workdaysched.png"
import BudgetTracker from "../../assets/budgettracker.png"

function Portfolio() {
  // const { name, description } = currentCategory;
  return (
    <section className="portfolio" id="portfolio">

 
          <div className="card">
            <img src = {TravelBlog}
              alt="travelblog"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/One-Mile-At-A-Time" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
    
          <div className="card">
            <img src = {IamIngish}
              alt="travelblog"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/iaminglish" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://inglish2022.github.io/iaminglish/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {CodeQuiz}
              alt="codequiz"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/codeQuizProject1" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://inglish2022.github.io/codeQuizProject1/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {RunBuddy}
              alt="runbuddy"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/run-buddy" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://lernantino.github.io/run-buddy/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {WeatherDashboard}
              alt="weatherdashboard"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/Weather-Dashboard1" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://inglish2022.github.io/Weather-Dashboard1/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
 
          <div className="card">
            <img src = {TechBlog}
              alt="techblog"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/Tech-Blog-MVC" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://nameless-hollows-41057.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {TravelPlanner}
              alt="travelplanner"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/mhiss11/Project-1-" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mhiss11.github.io/Project-1-/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {WorkDaySched}
              alt="workdayscheduler"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/workDayScheduler" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="  https://inglish2022.github.io/workDayScheduler/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {BudgetTracker}
              alt="budgettracker"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/Budget-Tracker-PWA" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://budget-tracker-pwa-inglish.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src = {NoteTaker}
              alt="notetaker"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/inglish2022/Note-Taker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://tranquil-waters-62939.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>

    </section>
  );
}
export default Portfolio;