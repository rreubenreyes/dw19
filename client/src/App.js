import React, { Component } from 'react';
import styled from 'styled-components';
import 'materialize-css/dist/css/materialize.min.css';

import MapContext from './context/map-context';
import Header from './components/Header';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import { pxPerMeter } from './utils';

const GridWrapper = styled.div`
  display: grid;
  grid-template: 10vh 90vh / 80vw 20vw;
  grid-template-areas:
    'header header'
    'map sidebar';
`;

export default class App extends Component {
  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        this.setState(state => ({
          userCoords: {
            lat: latitude,
            lng: longitude
          }
        }));
      },
      err => console.log(err)
    );
  }

  static defaultProps = {
    defaultCenter: {
      lat: 37.787484,
      lng: -122.396397
    },
    defaultZoom: 15
  };

  handleChange = ({ center, zoom, bounds, marginBounds }) => {
    const { lat } = center;
    this.setState(() => ({
      pxPerMeter: pxPerMeter({ lat, zoom }),
      zoom
    }));
  };

  handleActiveFence = fence => {
    this.setState(() => ({
      activeFence: fence
    }));
  };

  state = {
    activeFence: null,
    pxPerMeter: pxPerMeter(
      this.props.defaultCenter.lat,
      this.props.defaultZoom
    ),
    zoom: this.props.defaultZoom,
    userCoords: null
  };

  render() {
    return (
      <GridWrapper>
        <MapContext.Provider value={{ ...this.props, ...this.state }}>
          <Header userCoords={this.state.userCoords} />
          <Sidebar />
          <Map
            {...this.props}
            userCoords={this.state.userCoords}
            setActiveFence={this.handleActiveFence}
            onChange={this.handleChange}
            zoom={this.state.zoom}
            pxPerMeter={this.state.pxPerMeter}
          />
        </MapContext.Provider>
      </GridWrapper>
    );
  }
}
