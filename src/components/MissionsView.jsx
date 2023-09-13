import React from 'react';
import PropTypes from 'prop-types';

function MissionsView({ missionsProp }) {
  return (

    <tbody>
      <tr>
        <td>{missionsProp.mission_name}</td>
        <td>{missionsProp.description}</td>
      </tr>
    </tbody>

  );
}

MissionsView.propTypes = {
  missionsProp: PropTypes.instanceOf(Object).isRequired,
};

export default MissionsView;
