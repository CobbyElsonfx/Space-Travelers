import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div className="rockets-container">
      {
        rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-card">
            <img src={rocket.flickr_images} alt="rocketimage" />
            <div className="text-container">
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
