import React from 'react';
import './Profile.css';

function Profile({info}) {
	return (
    <div className="info" >
      <h6>{info}</h6>
    </div>
  );
}

export default Profile;
