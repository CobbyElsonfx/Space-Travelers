import React from 'react';
import { useSelector } from 'react-redux';
import MissionsView from './MissionsView';

function Mission() {
  const { missionsFetched } = useSelector((state) => state.missions);

  return (
    <div>
      {
        missionsFetched
          .map((mission) => <MissionsView key={mission.mission_id} missionsProp={mission} />)
      }
    </div>
  );
}

export default Mission;
