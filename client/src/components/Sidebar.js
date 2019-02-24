import React from 'react';

import GridChild from './common/GridChild';
import MapContext from '../context/map-context';

export default () => (
  <GridChild gridArea="sidebar">
    <MapContext.Consumer>
      {({ activeFence }) => {
        return activeFence ? (
          <div>
            <p>{activeFence.title}</p>
            <p>{activeFence.description}</p>
          </div>
        ) : (
          ''
        );
      }}
    </MapContext.Consumer>
  </GridChild>
);
