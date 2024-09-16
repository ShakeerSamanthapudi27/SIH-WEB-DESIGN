import React from 'react';
import PromptContainer from './prompt';
const Homepage = () => {
  return (
    <div className="homepage">
    <div className="popular-destinations-section">
        <h1 className='chead'>Chatbot Services</h1>
        <div className="destinations-grid">
          <div className="destination-card">GW Information</div>
          <div className="destination-card">Reports</div>
          <div className="destination-card">NOC</div>
          <div className="destination-card">Level at Specific Longitude and Latitude</div>
        </div>
      </div>
      <div className="statistics">
        <div className="stat-item">
          <h2>2,19,32,799</h2>
          <p>Groundwater Wells</p>
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
      {/* Top Section */}
      <div className="top-section">
        <div className="overlay">
          <h1 className="title">Groundwater Information of Specific Region </h1>
          <PromptContainer/>
          <div className="search-bar">
            <select className="region-select">
              <option value="" disabled selected>Select Region</option>
              <option value="alluri_sitharama_raju">Alluri Sitharama Raju</option>
    <option value="anakapalli">Anakapalli</option>
    <option value="ananthapuramu">Ananthapuramu</option>
    <option value="annamayya">Annamayya</option>
    <option value="bapatla">Bapatla</option>
    <option value="chittoor">Chittoor</option>
    <option value="east_godavari">East Godavari</option>
    <option value="eluru">Eluru</option>
    <option value="guntur">Guntur</option>
    <option value="kakinada">Kakinada</option>
    <option value="konaseema">Konaseema</option>
    <option value="krishna">Krishna</option>
    <option value="kurnool">Kurnool</option>
    <option value="nandyal">Nandyal</option>
    <option value="ntr">NTR</option>
    <option value="palnadu">Palnadu</option>
    <option value="parvathipuram_manyam">Parvathipuram Manyam</option>
    <option value="prakasam">Prakasam</option>
    <option value="sri_potti_sriramulu_nellore">Sri Potti Sriramulu Nellore</option>
    <option value="sri_sathya_sai">Sri Sathya Sai</option>
    <option value="srikakulam">Srikakulam</option>
    <option value="tirupati">Tirupati</option>
    <option value="visakhapatnam">Visakhapatnam</option>
    <option value="vizianagaram">Vizianagaram</option>
    <option value="west_godavari">West Godavari</option>
    <option value="ysr_kadapa">Y.S.R Kadapa</option>
            </select>
            <button className="search-btn">Get</button>
          </div>
          <p className="other-regions">
            Most searched regions: NTR, Guntur, Srikakulam
          </p>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="wave"></div>
      
    </div>
  );
};

export default Homepage;
