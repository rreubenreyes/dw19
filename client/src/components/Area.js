import React, { Component } from 'react';
import styled from 'styled-components';

import MapContext from '../context/map-context';
import { sampleData } from '../data';

const Circle = styled.div`
  position: relative;
  height: ${props => `${props.radius * props.pxPerMeter}px`};
  width: ${props => `${props.radius * props.pxPerMeter}px`};
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.25);

  :after {
    cursor: default;
    position: absolute;
top: 50%
    left: 50%;
    font-size: 20px;
    background-color: white;
    content: '${props => props.locationName}';
  }
`;

export default class Area extends Component {
  render() {
    const insideFences = sampleData.fences.inside;

    return insideFences.map(() => (
      <MapContext.Consumer>
        {({ pxPerMeter: ppm, zoom }) => (
          <div
            style={{
              position: 'absolute',
              left: `${ppm}px`,
              top: `${ppm}px`,
            }}
          >
            <Circle
              key="adfj21"
              lat={37.787484}
              lng={-122.396397}
              pxPerMeter={ppm}
              radius={100}
              zoom={zoom}
              locationName="Galvanize (100m)"
            />
          </div>
        )}
      </MapContext.Consumer>
    ));
  }
}
