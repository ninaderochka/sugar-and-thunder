import React from 'react';
import Header from '../components/Header';
import RecentBlog from '../components/RecentBlog';
import Tickets from '../components/Tickets';
import Therapists from '../components/Therapists';

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Therapists />
      <RecentBlog />
      <Tickets />
    </div>
  );
}

export default Home;
