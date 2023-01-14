import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';
// import EditProfile from './components/EditProfile';
import Cards from './components/Cards';
import ThankUTicket from './components/ThankUTicket';
import AddNewCard from './components/AddNewCard';
import ThankUCard from './components/ThankUCard';

function App() {
  return (
    <div className="App">
      <ThankUCard />
      <AddNewCard />
      <ThankUTicket />
      <Cards />
      {/* <EditProfile/> */}
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
