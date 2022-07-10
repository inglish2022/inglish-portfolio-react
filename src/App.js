import React from 'react';
// import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}

      ></Nav> */}
      <Header></Header>
      <main>
        <div>
        <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
