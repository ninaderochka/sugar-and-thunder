import React from 'react';
import Header from './Header';
import RecentBlog from './RecentBlog';
import Communicate from './Communicate';
import Tickets from './Tickets';
import Therapists from './Therapists';

function Home() {
  return (
    <div className="App">
     <Header />
      <Therapists />
      <Communicate />
      <RecentBlog />
      <Tickets />

    </div>
  );
}

export default Home;
