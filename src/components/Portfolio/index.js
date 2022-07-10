import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/small/assignment/portfolio.png";
import PortfolioList from '../PortfolioList';

function Portfolio() {
  // const { name, description } = currentCategory;
  return (
    <section>
      {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1> */}
      {/* <p>{description}</p> */}
      <PortfolioList  />
    </section>
  );
}
export default Portfolio;