import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Top Section */}
      <div className="top-section">
        <div className="overlay">
          <h1 className="title">BOOK SCUBA DIVING ONLINE</h1>
          <div className="search-bar">
            <select className="country-select">
              <option value="Australia">Australia</option>
              <option value="Bali">Bali</option>
              <option value="Phuket">Phuket</option>
              <option value="Miami">Miami</option>
            </select>
            <input type="date" className="date-input" />
            <button className="search-btn">Search</button>
          </div>
          <p className="popular-destinations">
            POPULAR DESTINATIONS: Bali, Phuket, Sydney, Miami
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics">
        <div className="stat-item">
          <h2>5300</h2>
          <p>Dive Centers</p>
        </div>
        <div className="stat-item">
          <h2>3700</h2>
          <p>Beautiful Locations</p>
        </div>
        <div className="stat-item">
          <h2>153</h2>
          <p>Countries Worldwide</p>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="popular-destinations-section">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">Bali</div>
          <div className="destination-card">Phuket</div>
          <div className="destination-card">Sydney</div>
          <div className="destination-card">Miami</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
