import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrrofileDisplay = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-profile-picture`);
        const profilePicPath = response.data.profilePicture;
        setProfilePicture(`${process.env.REACT_APP_API_URL}/uploads/${profilePicPath}`);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);

  return (
    <div className='profile'>
      <h3>Profile Picture</h3>
      {profilePicture ? (
        <img src={profilePicture} alt="Profile" className='images' />
      ) : (<div>
        <p>No profile picture uploaded.</p>
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>  {/* Improved accessibility for spinner */}
          
        </div>
      </div>
      )}
    </div>
  );
};

export default PrrofileDisplay;
