import React, { Component } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import GoogleMapReact from 'google-map-react';
import ContentComponent from './ContentComponent';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
=======
>>>>>>> c37bfd0e5081674d4ab18ef211238a9e6bafa27f

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
  static defaultProps = {
    defaultCenter: {
      lat: 37.787484,
      lng: -122.396397
    },
    defaultZoom: 15
  };

<<<<<<< HEAD
  state = {
    meters: pxPerMeter(this.props.defaultCenter.lat, this.props.defaultZoom),
    zoom: this.props.defaultZoom
  };

  onChange = ({ center, zoom, bounds, marginBounds }) => {
    const { lat } = center;
    this.setState(() => ({
      meters: pxPerMeter({ lat, zoom }),
      zoom
=======
  handleChange = ({ center, zoom, bounds, marginBounds }) => {
    const { lat } = center;
    this.setState(() => ({
      pxPerMeter: pxPerMeter({ lat, zoom }),
      zoom,
>>>>>>> c37bfd0e5081674d4ab18ef211238a9e6bafa27f
    }));
  };

  handleActiveFence = fence => {
    this.setState(() => ({
      activeFence: fence,
    }));
  };

  state = {
    activeFence: null,
    pxPerMeter: pxPerMeter(
      this.props.defaultCenter.lat,
      this.props.defaultZoom
    ),
    zoom: this.props.defaultZoom,
  };

  render() {
    return (
<<<<<<< HEAD
      <div style={{ height: '100vh', width: '100%' }}>
        <ContentComponent />
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
=======
      <GridWrapper>
        <MapContext.Provider value={{ ...this.props, ...this.state }}>
          <Header />
          <Sidebar />
          <Map
            {...this.props}
            setActiveFence={this.handleActiveFence}
            onChange={this.handleChange}
>>>>>>> c37bfd0e5081674d4ab18ef211238a9e6bafa27f
            zoom={this.state.zoom}
            pxPerMeter={this.state.pxPerMeter}
          />
        </MapContext.Provider>
      </GridWrapper>
    );
  }
}
