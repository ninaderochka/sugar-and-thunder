import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';
import ThankUContact from './components/ThankUContact';
import ThankUSignup from './components/ThankUSignup';
import ThankUTherapist from './components/ThankUTherapist';
import ThankUTicket from './components/ThankUTicket';
import ThankUSub from './components/ThankUSub';
import ThankUEdit from './components/ThankUEdit';
import ThankUCard from './components/ThankUCard';


function App() {
  return (
    <div className="App">
      <ThankUContact />
      <ThankUSignup />
      <ThankUTherapist />
      <ThankUTicket />
      <ThankUSub />
      <ThankUEdit />
      <ThankUCard />

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
