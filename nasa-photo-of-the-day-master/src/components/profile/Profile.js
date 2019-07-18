import React from 'react';
import './Profile.css';

function Profile(banana) {
	return (
    <div className="info" >
      <h6>{banana.info}</h6>
    </div>
  );
}

export default Profile;
