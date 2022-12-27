import React from 'react';
import Header from './component/Header';
import RecentBlog from './components/RecentBlog';
import Communicate from './components/communicate';
import Tickets from './components/tickets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <Communicate />
      <RecentBlog />
      <Tickets />
       <Footer />
  </div>
  );
}

export default App;
