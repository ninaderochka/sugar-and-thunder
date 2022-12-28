import React from 'react';

import './App.css';
import Header from './component/Header';
import Communicate from './components/communicate';
import Tickets from './components/tickets';

function App() {
  return (
    <div className="App">
      <Header />
      <Communicate />
      <Tickets />
    </div>
  );
}

export default App;
