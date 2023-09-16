import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/myrocketStyles.css';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <table>
      <tbody>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <tr key={rocket.id} className="name-profile">
              {rocket.name}
            </tr>
          ))
        ) : (
          <h3 className="name-profile">No Rockets reserved yet</h3>
        )}
      </tbody>
    </table>
  );
}

export default MyRockets;
