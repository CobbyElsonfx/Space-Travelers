import React from 'react';
import PropTypes from 'prop-types';

function MissionsView({ missionsProp }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{missionsProp.mission_name}</td>
            <td>{missionsProp.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MissionsView.propTypes = {
  missionsProp: PropTypes.instanceOf(Object).isRequired,
};

export default MissionsView;
