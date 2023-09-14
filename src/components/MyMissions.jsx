import React from 'react';
import { useSelector } from 'react-redux';

function MyMissions() {
  const { missions } = useSelector((state) => state.missions);
  const { reservedMissions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => reservedMissions
    .includes(mission.mission_id));

  return (
    <table>
      <tbody>
        {
              joinedMissions.length < 1 ? (<h2>No Missions Joined</h2>)
                : joinedMissions.map((mission) => (
                  <tr key={mission.mission_id}>
                    {mission.mission_name}
                  </tr>
                ))
            }
      </tbody>
    </table>
  );
}

export default MyMissions;
