import React, { useEffect, useState } from "react";
import './App.css';
import api from './api';
import SearchInput from "./components/SearchInput";
import ParkingLotCard from "./components/ParkingLotCard";

function App() {
  const [data, setData] = useState([]);

  const fetchParkingLots = async () => {
    let res = await api.getAllParkingLots();
    setData(res);
  };

  useEffect(() => {
    fetchParkingLots();
  }, []);

  return (
    <div className="App">
      <SearchInput />
      <ParkingLotCard />
    </div>
  );
}

export default App;
