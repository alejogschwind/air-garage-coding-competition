import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import {
  MapWrapper
} from './styles';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({ lng, lat, parkingLots }) => {

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

  useEffect(() => {
    parkingLots.forEach(parkingLot => {

      const el = document.createElement("div");
      const el2 = document.createElement("div");
      const el3 = document.createElement("div");

      el.className = "marker ";

      console.log([parkingLot.coordinates.longitude, parkingLot.coordinates.latitude]);
      new mapboxgl.Marker(el)
        .setLngLat([parkingLot.coordinates.longitude, parkingLot.coordinates.latitude])
        .addTo(map.current);
    });
  }, [parkingLots]);

  return (
    <MapWrapper ref={mapContainer}>

    </MapWrapper>
  );
};

export default Map;
