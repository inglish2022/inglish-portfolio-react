import React, { useState } from 'react';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
// import Header from './components/Header';
import ContactForm from './components/Contact';
import Nav from './components/Nav'


function App() {

  const [currentPage, setCurrentPage] = useState('About')

  function choosePage(page) {
    if (page === 'About') {
      return <About />;
    }
    if (page === 'Portfolio') {
      return <Portfolio />;
    }
    if (page === 'ContactForm') {
      return <ContactForm />;
    }
    if (page === 'Resume') {
      return <Resume />;
    }
  }

  const handlePage = (page) => setCurrentPage(page);


//   return (
//     <div>
 
//       <Header />
//       <main className='my-5' >

        
//           <About />
          
//           <Portfolio />

//          <ContactForm />

//          <Resume />

//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

return (
  <main className="App">
    <Nav
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      handlePage={handlePage}></Nav>
    {choosePage(currentPage)}
    <Footer />
  </main>
);
}

export default App;
