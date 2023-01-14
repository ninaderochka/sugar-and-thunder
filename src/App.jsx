import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';
import Career from './components/Career';
import TherapistProfile from './components/TherapistProfile';
import AboutTeam from './components/AboutTeam';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About/Career" element={<Career />} />
        <Route path="/About/AboutTeam" element={<AboutTeam />} />
        <Route path="/TherapistProfile" element={<TherapistProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
