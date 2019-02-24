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
    font-size: 30px;
    background-color: white;
    content: 'Geofence Here!!!!';
  }
`;

class App extends Component {
  static defaultProps = {
    defaultCenter: {
      lat: 59.95,
      lng: 30.33,
    },
    defaultZoom: 11,
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
            lat={59.955413}
            lng={30.337844}
            pxPerMeter={this.state.meters}
            radius={100}
            zoom={this.state.zoom}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
