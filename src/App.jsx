import React from 'react';

import Communicate from './components/communicate';
import Tickets from './components/tickets';
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
