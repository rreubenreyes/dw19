import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapContext from '../context/map-context';
import GridChild from './common/GridChild';
import Area from './Area';
import { google } from '../lib';
import { pxPerMeter } from '../utils';

export default class Map extends Component {
  static defaultProps = {
    defaultCenter: {
      lat: 37.787484,
      lng: -122.396397,
    },
    defaultZoom: 15,
  };

  state = {
    pxPerMeter: pxPerMeter(
      this.props.defaultCenter.lat,
      this.props.defaultZoom
    ),
    zoom: this.props.defaultZoom,
  };

  onChange = ({ center, zoom, bounds, marginBounds }) => {
    const { lat } = center;
    this.setState(() => ({
      pxPerMeter: pxPerMeter({ lat, zoom }),
      zoom,
    }));
  };

  render() {
    return (
      <MapContext.Provider value={{ ...this.props, ...this.state }}>
        <GridChild gridArea="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: google.API_KEY }}
            defaultCenter={this.props.defaultCenter}
            defaultZoom={this.props.defaultZoom}
            zoom={this.state.zoom}
            resetBoundsOnResize={true}
            scaleControl={true}
            onChange={this.onChange}
          >
            <Area />
          </GoogleMapReact>
        </GridChild>
      </MapContext.Provider>
    );
  }
}
