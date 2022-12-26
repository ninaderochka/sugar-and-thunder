import React from 'react';
import Communicate from './components/communicate';
import Tickets from './components/tickets';
import Therapists from './components/therapists';


function App() {
  return (
    <div className="App">
      <Communicate />
      <Therapists />
      <Tickets />

    </div>
  );
}

export default App;
