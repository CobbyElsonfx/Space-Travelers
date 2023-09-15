import React from 'react';
import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <table>
      <tbody>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              {rocket.name}
            </tr>
          ))
        ) : (
          <h6>No Rockets reserved yet</h6>
        )}
      </tbody>
    </table>
  );
}

export default MyRockets;
