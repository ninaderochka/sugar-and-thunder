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
import Booking from './containers/Booking';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
