import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Blog from './containers/Blog';
import About from './containers/About';
import Contact from './containers/Contact';
import Signup from './containers/Signup';
import Login from './containers/Login';
import { UserAuthContextProvider } from './AuthContext';
import Requirements from './components/Requirements';
import TherapistsCreate from './components/TherapistCreate';
import TherapistProfile from './components/TherapistProfile';
import ThankUTherapist from './components/ThankUTherapist';
import ThankUContact from './components/ThankUContact';
import EditProfile from './components/EditProfile';
import ThankUEdit from './components/ThankUEdit';
import AboutTeam from './components/AboutTeam';
import Career from './components/Career';
import ByTicket from './components/ByTicket';
import ThankUCard from './components/ThankUCard';

function App() {
  return (
    <div className="Ap">
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Requirements" element={<Requirements />} />
          <Route path="/TherapistCreate" element={<TherapistsCreate />} />
          <Route path="/ThankUTherapist" element={<ThankUTherapist />} />
          <Route path="/ThankUContact" element={<ThankUContact />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/ThankUEdit" element={<ThankUEdit />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/ByTicket" element={<ByTicket />} />
          <Route path="/ThankUCard" element={<ThankUCard />} />
          <Route path="/TherapistProfile" element={<TherapistProfile/>} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
