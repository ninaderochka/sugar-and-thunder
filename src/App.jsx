import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blogs from './containers/Blogs';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
