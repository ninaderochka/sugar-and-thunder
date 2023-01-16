import React from 'react';
import Login from './components/Login'
import Header from './components/Header';
import RecentBlog from './components/RecentBlog';
import Communicate from './components/Communicate';
import Tickets from './components/Tickets';
import Therapists from './components/Therapists';
import Footer from './components/Footer';
import TherapistCreate from './components/TherapistCreate';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Therapists />
      <Communicate />
      <RecentBlog />
      <Tickets />
      <Footer />
      <TherapistCreate />
    </div>
  );
}

export default App;
