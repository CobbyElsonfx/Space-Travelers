/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveRocket } from '../redux/rockets/rocketSlice';

const Reserve = ({ rocketId, description }) => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => {
    const rocket = state.rockets.rockets.find((rocket) => rocket.id === rocketId);
    return rocket.reserved;
  });

  const reserveRocketAction = () => {
    dispatch(reserveRocket(rocketId));
  };
  const cancelReservationAction = () => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <>
      <p>{description}</p>
      <button
        type="button"
        onClick={reserved ? cancelReservationAction : reserveRocketAction}
        className={reserved ? 'cancel-button' : 'reserve-button'}
      >
        {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    </>
  );
};

Reserve.propTypes = {
  rocketId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Reserve;
