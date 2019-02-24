import { createContext } from 'react';
import { pxPerMeter } from '../utils/index.js';

export default createContext({
  defaultCenter: {
    lat: 37.787484,
    lng: -122.396397,
  },
  defaultZoom: 15,
  zoom: 15,
  pxPerMeter: pxPerMeter(37.787484, 15),
});
