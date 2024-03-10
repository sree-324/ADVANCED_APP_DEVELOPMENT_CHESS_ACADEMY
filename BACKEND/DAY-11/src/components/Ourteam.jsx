// TeamPage.js

// import React from 'react';
import '../assets/css/Ourteam.css';
import Navbar from './Navbar';

const TeamPage = () => {
  return (
    <div className="team-page">
        <div>
            <Navbar />
        </div>
        <div className='team-details'>
      <h1>Our Team</h1>
      <div className="team-container">
        <div className="team-member">
          <img
            src="john-doe.jpg"
            alt="John Doe"
            className="team-member-image"
          />
          <div className="team-member-details">
            <h2>John Doe</h2>
            <p>
              <strong>Position:</strong> CEO
            </p>
            <p>
              John is the founder and CEO of our company. He leads the
              strategic direction of the organization and ensures that our team
              achieves its goals.
            </p>
          </div>
        </div>
        {/* Add more team members here */}
      </div>
      </div>
    </div>
  );
};

export default TeamPage;
