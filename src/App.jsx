import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';

// import ThankUTicket from './components/ThankUTicket';

import ThankUCard from './components/ThankUCard';
// import ThankUContact from './components/ThankUContact';
// import ThankUEdit from './components/ThankUEdit';
// import ThankUSignup from './components/ThankUSignup';
// import ThankUSub from './components/ThankUSub';
// import ThankUTherapist from './components/ThankUTherapist';

function App() {
  return (
    <div className="App">
      <ThankUCard />
      {/* <ThankUContact />
      <ThankUEdit />
      <ThankUSignup />
      <ThankUSub />
      <ThankUTherapist />
      <ThankUTicket /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
