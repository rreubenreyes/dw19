import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

const GridWrapper = styled.div`
  display: grid;
  grid-template: 10vh 90vh / 80vw 20vw;
  grid-template-areas:
    'header header'
    'map sidebar';
`;

export default class App extends Component {
  render() {
    return (
      <GridWrapper>
        <Header />
        <Sidebar />
        <Map />
      </GridWrapper>
    );
  }
}
