import React from 'react';
import Header from '../components/Header';
import RecentBlog from '../components/RecentBlog';
import Communicate from '../components/Communicate';
import Tickets from '../components/Tickets';
import Therapists from '../components/Therapists';

function Home() {
  return (
    <div>
      <Header />
      <Therapists />
      <Communicate />
      <RecentBlog />
      <Tickets />
    </div>
  );
}

export default Home;
