import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Store from './components/pages/Store';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Blogs" component={Blogs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/Store" component={Store} />
        <Route path="/consulting" component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
