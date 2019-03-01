import React from 'react';
import GridChild from './common/GridChild';

export default props => {
  const { userCoords } = props;

  return (
    <GridChild shadow gridArea="header">
      {userCoords ? (
        <div>
          <h5>User Coordinates:</h5>
          <div>{`lat: ${userCoords.lat}`}</div>
          <div>{`lng: ${userCoords.lng}`}</div>
        </div>
      ) : (
        'Requesting User Coordinates'
      )}
    </GridChild>
  );
};
