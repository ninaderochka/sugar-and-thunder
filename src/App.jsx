import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';
<<<<<<< HEAD
import Requirements from './components/Requirements';

// import EditProfile from './components/EditProfile';
import Cards from './components/Cards';
import ThankUTicket from './components/ThankUTicket'
=======
import ThankUTicket from './components/ThankUTicket';
>>>>>>> d9c51c950e92bd6b4c1b9eda6eedaa0ec07f8863

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <EditProfile/> */}
=======
      <ThankUTicket />
>>>>>>> d9c51c950e92bd6b4c1b9eda6eedaa0ec07f8863
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Requirements" element={<Requirements />} />

 <Route path="/Login" element={<Login />} />
 <Route path="/About/Career" element={<Career />} />
<Route path="/About/AboutTeam" element={<AboutTeam />} />
        <Route path="/TherapistProfile" element={<TherapistProfile />} />
        <Route path="/ByTicket" element={<ByTicket />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/ThankUTicket" element={<ThankUTicket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
