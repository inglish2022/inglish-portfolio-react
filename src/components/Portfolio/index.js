import React from 'react';

import TravelBlog from "../../assets/travelblog.png";
import IamIngish from "../../assets/portfolio.png";
import CodeQuiz from "../../assets/codequiz.png";
import RunBuddy from "../../assets/runbuddy.png";
import WeatherDashboard from "../../assets/weatherdashboard.png";
import TechBlog from "../../assets/techblog.png";



function Portfolio() {
  // const { name, description } = currentCategory;
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {TravelBlog}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/One-Mile-At-A-Time" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {IamIngish}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/Iaminglish" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {CodeQuiz}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/CodeQuiz" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {RunBuddy}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/RunBuddy" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {WeatherDashboard}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/WeatherDashboard" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src = {TechBlog}
              alt="travelblog"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/inglish2022/TechBlog" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href=" https://one-mile-at-a-time.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
export default Portfolio;