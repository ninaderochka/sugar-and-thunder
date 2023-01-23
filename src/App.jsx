import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import RecentBlog from './components/RecentBlog';
import Communicate from './components/Communicate';
import Tickets from './components/Tickets';
import Therapists from './components/Therapists';
import Footer from './components/Footer';
import TherapistCreate from './components/TherapistCreate';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';

import AddNewCard from './components/AddNewCard';

import ThankUSignup from './components/ThankUSignup';

import ThankUEdit from './components/ThankUEdit';

import ThankUTherapist from './components/ThankUTherapist';

import ThankUContact from './components/ThankUContact';

import Requirements from './components/Requirements';
// import EditProfile from './components/EditProfile';
import Cards from './components/Cards';
import ThankUTicket from './components/ThankUTicket';
import Login from './containers/Login';
import Career from './components/Career';
import AboutTeam from './components/AboutTeam';
import TherapistProfile from './components/TherapistProfile';
import ByTicket from './components/ByTicket';
import TherapistCreate from './components/TherapistCreate';
import ThankUCard from './components/ThankUCard';
import ThankUSub from './components/ThankUSub';

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

        <Route path="/Requirements" element={<Requirements />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/About/Career" element={<Career />} />
        <Route path="/About/AboutTeam" element={<AboutTeam />} />
        <Route path="/TherapistProfile" element={<TherapistProfile />} />
        <Route path="/ByTicket" element={<ByTicket />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/ThankUTicket" element={<ThankUTicket />} />
        <Route path="/ThankUSub" element={<ThankUSub />} />
        <Route path="/TherapistCreate" element={<TherapistCreate />} />
        <Route path="/TherapistCreate" element={<TherapistCreate />} />
        <Route path="/ThankUCard" element={<ThankUCard />} />
        <Route path="/ThankUTherapist" element={<ThankUTherapist />} />
        <Route path="/ThankUEdit" element={<ThankUEdit />} />
        <Route path="/ThankUSignup" element={<ThankUSignup />} />
        <Route path="/AddNewCard" element={<AddNewCard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
