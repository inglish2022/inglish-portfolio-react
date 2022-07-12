import React from 'react';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/Contact';
import coverImage from "./assets/cover/mandalacover.png";

function App() {




  return (
    <div>
 
      <Header />
      <main className='my-5' style={{ backgroundImage: `url(${coverImage})`}}>

        
          <About />
          <Portfolio />

         <ContactForm />
         <Resume />

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
