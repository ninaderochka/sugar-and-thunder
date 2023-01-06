import React from 'react';
import Header from '../components/Header';
import RecentBlog from '../components/RecentBlog';
import Communicate from '../components/Communicate';
import Therapists from '../components/Therapists';
import Tickets from '../components/Tickets';

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Therapists />
      <Communicate />
      <RecentBlog />
      <Tickets />
    </div>
  );
}

export default Home;
