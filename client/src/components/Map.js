import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapContext from '../context/map-context';
import GridChild from './common/GridChild';
import Area from './Area';
import { google } from '../lib';
import { pxPerMeter } from '../utils';

export default class Map extends Component {
  render() {
    return (
      <GridChild relative gridArea="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: google.API_KEY }}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          resetBoundsOnResize={true}
          scaleControl={true}
          onChange={this.props.onChange}
        >
          <Area />
        </GoogleMapReact>
      </GridChild>
    );
  }
}
