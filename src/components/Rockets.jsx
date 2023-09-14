import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';
import '../stylesheets/rockets.css';
import Reserve from './Reserves';

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
            <div className="rocket-img-container">
              <img src={rocket.flickr_images} alt="rocketimage" className="rocket-img" />
            </div>
            <div className="text-container">
              <h2 className="name">{rocket.name}</h2>
              <Reserve key={rocket.id} />
              <p className="description">{rocket.description}</p>
              <button type="button" className="reserve-button">Reserve Rocket</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
