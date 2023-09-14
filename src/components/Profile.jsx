import React from 'react';
import MyMissions from './MyMissions';

function Profile() {
  return (
    <div className="myProfileWrapper">
      <div className="myMissions">
        <h2>My Missions</h2>
        <MyMissions />
      </div>
    </div>
  );
}

export default Profile;
