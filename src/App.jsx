import React from 'react';
import Header from './Components/Header';
import RecentBlog from './Components/RecentBlog';
import Communicate from './Components/Communicate';
import Tickets from './Components/Tickets';
import Therapists from './Components/Therapists';
import Footer from './Components/Footer';
import {Route, Routes, Link} from "react-router-dom"
import Blog from './Components/Blog';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      {/* navbar should be placed here */}

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Blog' element={<Blog />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
