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
      const el2 = document.createElement("div");
      const el3 = document.createElement("div");

      el.className = "marker ";

      console.log([parkingLot.coordinates.longitude, parkingLot.coordinates.latitude]);
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
