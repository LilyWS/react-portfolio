import React, {useState} from 'react';
import './app.css';

import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState('about')

  const pageTable = () => {
    if(page == 'portfolio') {
      return <Portfolio />
    }else if (page == 'about'){
      return <About />
    }else if (page == 'contact'){
      return <Contact />
    }
  }

  return (
    <div>
      <Header setPage={setPage}/>
      {pageTable()}
      <Footer/>
    </div>
  );
}

export default App;