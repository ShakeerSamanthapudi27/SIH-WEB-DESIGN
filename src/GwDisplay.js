import React, { useState, useEffect } from 'react';


const GwDisplay = () => {
  const statements = [
    "Groundwater is a crucial source of drinking water.",
    "It supports agriculture and food production.",
    "Groundwater helps maintain the ecosystem balance.",
    "It provides water for industrial processes.",
    "Groundwater is a renewable, yet finite, resource.",
    "Proper management ensures a sustainable future.",
    "It acts as a natural water storage system.",
    "Groundwater recharges lakes, rivers, and wetlands.",
    "It's a key component in drought resilience."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 3) % statements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [statements.length]);

  return (
    <div className="gallery-container">
      <div className="statement-box">
        {statements[index]}
      </div>
      <div className="statement-box">
        {statements[(index + 1) % statements.length]}
      </div>
      <div className="statement-box">
        {statements[(index + 2) % statements.length]}
      </div>
    </div>
  );
};

export default GwDisplay;
