import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import runChat from './gemini';
const Homepage = () => {
  async function sendPrompt(region, userInput) {
    console.log(region)
    if(region == '' || String(userInput).trim() == '') {
      window.alert("Please enter a valid region or prompt");
      return ;
    }
    console.log(userInput, region);
    let data = '';
    try {
      const response = await axios.post('http://127.0.0.1:5000/getresponse', JSON.stringify({district: region}), {
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      data = response.data;
    }
    catch(e) {
      setMessage("Error getting Response!");
    }
    const response = await runChat(`prompt: ${userInput}\n data: ${data}`);
    console.log(response);
    setMessage(response);
    setUserMessage('');
  }
  const [selectedRegion, setSelectedRegion] = useState("");
  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState('');

  // Step 2: Handle change
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value); // Update the selected region
  };

  const regions = [
    { label: "Alluri Sitharama Raju", value: "alluri sitharama raju" },
    { label: "Anakapalli", value: "anakapalli" },
    { label: "Ananthapuramu", value: "ananthapuramu" },
    { label: "Annamayya", value: "annamayya" },
    { label: "Bapatla", value: "bapatla" },
    { label: "Chittoor", value: "chittoor" },
    { label: "East Godavari", value: "east godavari" },
    { label: "Eluru", value: "eluru" },
    { label: "Guntur", value: "guntur" },
    { label: "Kakinada", value: "kakinada" },
    { label: "Konaseema", value: "konaseema" },
    { label: "Krishna", value: "krishna" },
    { label: "Kurnool", value: "kurnool" },
    { label: "Nandyal", value: "nandyal" },
    { label: "NTR", value: "ntr" },
    { label: "Palnadu", value: "palnadu" },
    { label: "Parvathipuram Manyam", value: "parvathipuram manyam" },
    { label: "Prakasam", value: "prakasam" },
    { label: "Sri Potti Sriramulu Nellore", value: "sri potti sriramulu nellore" },
    { label: "Sri Sathya Sai", value: "sri sathya sai" },
    { label: "Srikakulam", value: "srikakulam" },
    { label: "Tirupati", value: "tirupati" },
    { label: "Visakhapatnam", value: "visakhapatnam" },
    { label: "Vizianagaram", value: "vizianagaram" },
    { label: "West Godavari", value: "west godavari" },
    { label: "Y.S.R Kadapa", value: "ysr kadapa" }
  ];

  return (
    <div className="homepage">
    <div className="statistics">
        <div className="stat-item">
          <h2>2,19,32,799</h2>
          <p>Groundwater Wells in India</p>
        </div>
        <div className="stat-item">
          <h2>4%</h2>
          <p>Fresh water resources</p>
        </div>
        <div className="stat-item">
          <h2>95%</h2>
          <p>Depleted from 2002 to 2022</p>
        </div>
      </div>
    <div className="popular-destinations-section">
        <h1 className='chead'>Chatbot Services</h1>
        <div className="destinations-grid">
          <div className="destination-card">GW Information</div>
          <div className="destination-card">Reports</div>
          <div className="destination-card">NOC</div>
          <div className="destination-card">Level at Specific Longitude and Latitude</div>
        </div>
      </div>
      {/* Top Section */}
      <div className="top-section">
        <div className="overlay">
          <h1 className="title">Groundwater Information of Specific Region </h1>
          <div className="prompt-container">
            <input type="text" className="prompt-bar" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder="Type your prompt here..." />
            {/* <button className="submit-btn" >Enter</button> */}
          </div>
          <div className="search-bar">
            
          <select
            className="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="" disabled>Select Region</option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
            <button className="search-btn" onClick={() => sendPrompt(selectedRegion, userMessage)}>Get</button>
          </div>
          <p className="other-regions">
            Most searched regions: NTR, Guntur, Srikakulam
          </p>
          {message != ''? <div className='chatoutput'>
            <p>
              {message}
            </p>
          </div>: null}
        </div>
      </div>

      {/* Wave Separator */}
      <div className="wave"></div>
      
    </div>
  );
};

export default Homepage;
