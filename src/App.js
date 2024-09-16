import React from 'react';
import Navbar from './Navbar';
/*import PromptContainer from './prompt';*/
import GwDisplay from './GwDisplay';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='headi'>Insights</h1>
      <GwDisplay/>
      <Homepage/>
    </div>
  );
}

export default App;
