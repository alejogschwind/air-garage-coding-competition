import React, { useEffect, useState } from "react";
import './App.css';
import api from './api';

import HomePage from "./container/HomePage";

function App() {
  const [totlParkings, setTotalParkings] = useState(0);
  const [parkings, setParkings] = useState([]);

  const fetchParkingLots = async () => {
    let res = await api.getAllParkingLots();
    setParkings(res.data.businesses);
  };

  useEffect(() => {
    fetchParkingLots();
  }, []);

  console.log(parkings);
  return (
    <div className="App">
      {
        parkings.length > 0 &&
        <HomePage
          parkingLots={parkings}
          total={totlParkings}
        />
      }
    </div>
  );
}

export default App;
