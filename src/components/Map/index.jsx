import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import {
  MapWrapper
} from './styles';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({ lng, lat, parkingLots }) => {

  const zoom = 9;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);

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
    // Clean markers before add new marker
    markers.forEach(marker => {
      marker.remove();
    });

    let aux = [];
    parkingLots.forEach(parkingLot => {

      const el = document.createElement("div");

      el.className = "marker ";

      let marker = new mapboxgl.Marker(el)
        .setLngLat([parkingLot.coordinates.longitude, parkingLot.coordinates.latitude])
        .addTo(map.current);
      // Save markers to clean up the map later
      aux.push(marker);
    });
    setMarkers(aux);
  }, [parkingLots]);

  return (
    <MapWrapper ref={mapContainer}>

    </MapWrapper>
  );
};

export default Map;
