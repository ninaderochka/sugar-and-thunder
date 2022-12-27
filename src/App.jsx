import React from 'react';
import RecentBlog from './components/RecentBlog';
import Communicate from './components/communicate';
import Tickets from './components/tickets';
import Therapists from './components/therapists';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Communicate />
      <Therapists />
      <RecentBlog />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
