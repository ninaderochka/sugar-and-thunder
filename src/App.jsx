import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
