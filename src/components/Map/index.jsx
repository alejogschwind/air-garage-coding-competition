import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import {
  MapWrapper
} from './styles';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({ lng, lat }) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/gschwindalejo/ckpfjln6v19vm17pbunqu8l34',
      center: [lng, lat],
      zoom: zoom,
      lng: lng,
      lat: lat
    });
  });

  useEffect(() => {
    map.current.flyTo({
      center: [
        lng,
        lat
      ],
      essential: true
    });
  }, [lat, lng]);

  return (
    <MapWrapper ref={mapContainer} />
  );
};

export default Map;
