import React from 'react';

import Communicate from './components/Communicate';
import Tickets from './components/Tickets';
import About from './component/About';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';


function App() {
  return (
    <div className="App">

      <About />
      <Communicate />
      <Tickets />

      <Navbar />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
