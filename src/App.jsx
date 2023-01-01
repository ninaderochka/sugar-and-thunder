import React from 'react';
import Communicate from './components/communicate';
import Tickets from './components/tickets';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <About />
      <Communicate />
      <Tickets />
    </div>
  );
}

export default App;
