import React from 'react';
import GridChild from './common/GridChild';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const StyledTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 200%;
  font-weight: 600;
  padding: 0 1em;
`;

const StyledCoordinatesContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  font-size: 125%;
`;

export default props => {
  const { userCoords } = props;

  return (
    <GridChild shadow gridArea="header">
      {userCoords ? (
        <StyledHeaderContainer>
          <StyledTitle>While you're here</StyledTitle>
          <StyledCoordinatesContainers>
            <p>User Coordinates: </p>
            <p>{`Latitude: ${userCoords.lat.toFixed(6)}`}</p>
            <p>{`Longitude: ${userCoords.lng.toFixed(6)}`}</p>
          </StyledCoordinatesContainers>
        </StyledHeaderContainer>
      ) : (
        'Requesting User Coordinates'
      )}
    </GridChild>
  );
};
