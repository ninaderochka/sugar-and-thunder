import React from 'react';
import Header from '../components/Header';
import RecentBlog from '../components/RecentBlog';
import Therapists from '../components/Therapists';

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Therapists />
      <RecentBlog />
    </div>
  );
}

export default Home;
