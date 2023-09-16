import React from 'react';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

function Profile() {
  return (
    <div className="myProfileWrapper">
      <div className="myMissions">
        <h2>My Missions</h2>
        <MyMissions />
      </div>
      <div className="myRockets">
        <h2>Reserved Rockets</h2>
        <MyRockets />
      </div>
    </div>
  );
}

export default Profile;
