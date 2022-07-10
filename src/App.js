import React, { useState } from 'react';
// import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/Contact';

function App() {


  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected] = useState(false);

  return (
    <div>
      {/* <Nav 
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}

      ></Nav>  */}
      <Header></Header>
      <main>
      {!contactSelected ? (
      <>

        
        <Portfolio></Portfolio>
          <About></About>
          </>
          ) : (
    <ContactForm></ContactForm>
  )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
