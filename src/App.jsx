import React from 'react';
import RecentBlog from './components/RecentBlog';
import Communicate from './components/communicate';
import Tickets from './components/tickets';


function App() {
  return (
    <div className="App">
      <Communicate />
       <RecentBlog />
      <Tickets />

    </div>
  );
}

export default App;
