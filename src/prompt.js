import React from 'react';

const PromptContainer = () => {
  return (
    <div className="prompt-container">
      <input type="text" className="prompt-bar" placeholder="Type your prompt here..." />
      <button className="submit-btn">Enter</button>
    </div>
  );
};

export default PromptContainer;
