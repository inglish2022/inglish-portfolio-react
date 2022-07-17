import React from 'react';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/Contact';


function App() {




  return (
    <div>
 
      <Header />
      <main className='my-5' >

        
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
