import React from 'react';
import Navbar from './Navbar';
import PromptContainer from './prompt';
import GwDisplay from './GwDisplay';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GwDisplay/>
      <PromptContainer/>
    </div>
  );
}

export default App;
