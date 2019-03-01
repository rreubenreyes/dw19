import React from 'react';

import ContentComponent from './ContentComponent';
import GridChild from './common/GridChild';
import MapContext from '../context/map-context';

export default () => (
  <GridChild gridArea="sidebar">
    <MapContext.Consumer>
      {({ activeFence }) => {
        // return activeFence ? <div>We have an active fence</div> : '';
        return activeFence ? <ContentComponent fence={activeFence} /> : '';
      }}
    </MapContext.Consumer>
  </GridChild>
);
