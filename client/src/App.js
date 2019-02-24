import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import './App.css';

import { google } from './lib';
import { pxPerMeter, zoom } from './utils';

const Circle = styled.div`
  position: relative;
  height: ${props => `${props.radius * props.pxPerMeter}px`};
  width: ${props => `${props.radius * props.pxPerMeter}px`};
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.25);

  :after {
    cursor: default;
    position: absolute;
    top: -25%;
    left: 50%;
    font-size: 20px;
display: flex;
    background-color: white;
    content: '${props => props.locationName}';
  }
`;

class App extends Component {
  static defaultProps = {
    defaultCenter: {
      lat: 37.787484,
      lng: -122.396397,
    },
    defaultZoom: 15,
  };

  state = {
    meters: pxPerMeter(this.props.defaultCenter.lat, this.props.defaultZoom),
    zoom: this.props.defaultZoom,
  };

  onChange = ({ center, zoom, bounds, marginBounds }) => {
    const { lat } = center;
    this.setState(() => ({
      meters: pxPerMeter({ lat, zoom }),
      zoom,
    }));
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google.API_KEY }}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          zoom={this.state.zoom}
          resetBoundsOnResize={true}
          scaleControl={true}
          onChange={this.onChange}
        >
          <Circle
            lat={37.787484}
            lng={-122.396397}
            pxPerMeter={this.state.meters}
            radius={100}
            zoom={this.state.zoom}
            locationName="Galvanize"
          />
          <Circle
            lat={37.786996}
            lng={-122.405183}
            pxPerMeter={this.state.meters}
            radius={100}
            zoom={this.state.zoom}
            locationName="Museum of Ice Cream"
          />
          <Circle
            lat={37.795449}
            lng={-122.393618}
            pxPerMeter={this.state.meters}
            radius={100}
            zoom={this.state.zoom}
            locationName="Ferry Building"
          />
          <Circle
            lat={37.787246}
            lng={-122.400103}
            pxPerMeter={this.state.meters}
            radius={100}
            zoom={this.state.zoom}
            locationName="The Bird"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
