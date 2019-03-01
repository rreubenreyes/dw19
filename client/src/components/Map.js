import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import GridChild from './common/GridChild';
import { sampleData } from '../data';
import { google } from '../lib';

const Circle = styled.div`
  position: relative;
  height: ${props => `${props.radius * props.pxPerMeter}px`};
  width: ${props => `${props.radius * props.pxPerMeter}px`};
  border-radius: 50%;
  background-color: ${props => props.bgcolor || `rgba(255, 0, 0, 0.25)`};

  /*
  :after {
    cursor: default;
    position: absolute;
    top: 50%
    left: 50%;
    font-size: 20px;
    background-color: black;
    color: white;
    content: '${props => props.locationName}';
  } */
`;

export default class Map extends Component {
  render() {
    const { userCoords, apiFenceData } = this.props;

    // if this.props.apiFenceData is avaialble, use it, else use defaults;
    let insideFences;
    let outsideFences;
    // if (apiFenceData) {
    //   insideFences = apiFenceData.inside;
    //   outsideFences = apiFenceData.outside;
    // } else {
    insideFences = sampleData.fences.inside;
    outsideFences = sampleData.fences.outside;
    // }
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
          {insideFences.map(fence => {
            const {
              id,
              location: { lat, lng, radius },
              title
            } = fence;
            return (
              <Circle
                key={id}
                lat={lat}
                lng={lng}
                locationName={title}
                onClick={() => {
                  this.props.setActiveFence(fence);
                }}
                pxPerMeter={this.props.pxPerMeter}
                radius={radius}
                zoom={this.props.zoom}
              />
            );
          })}
          {outsideFences.map(fence => {
            const {
              id,
              location: { lat, lng, radius },
              title
            } = fence;
            return (
              <Circle
                key={id}
                lat={lat}
                lng={lng}
                locationName={title}
                onClick={() => {
                  this.props.setActiveFence(fence);
                }}
                pxPerMeter={this.props.pxPerMeter}
                radius={'150'}
                zoom={this.props.zoom}
                bgcolor={'rgba(0, 128, 0, 0.50)'}
              />
            );
          })}
          {userCoords && (
            <Circle
              key={'userCoords'}
              lat={userCoords.lat}
              lng={userCoords.lng}
              locationName={'User'}
              onClick={() => {}}
              pxPerMeter={this.props.pxPerMeter}
              radius={'100'}
              zoom={this.props.zoom}
              bgcolor={'rgba(0, 0, 255, 0.25)'}
            />
          )}
        </GoogleMapReact>
      </GridChild>
    );
  }
}
