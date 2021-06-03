import React, { useState } from 'react';
import api from '../../api';

import ParkingLotCard from '../../components/ParkingLotCard';
import SearchInput from '../../components/SearchInput';

import {
  HomePageWrapper,
  MainWrapper,
  MapWrapper,
  SearchInputWrapper,
  ParkingLotsGrid
} from './styles';

const HomePage = () => {

  const [searchLocation, setSearchLocation] = useState("");
  const [totlParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingsLots] = useState([]);

  const fetchParkingLots = async () => {
    // Protect from fetching without a location
    if (searchLocation.length <= 0) return;

    let res = await api.getAllParkingLots(searchLocation);
    setParkingsLots(res.data.businesses);
    setTotalParkingLots(res.data.total);
  };

  return (
    <HomePageWrapper>
      <MapWrapper>

      </MapWrapper>
      <MainWrapper>
        <SearchInputWrapper>
          <SearchInput
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            fetchParkingLots={fetchParkingLots}
          />
        </SearchInputWrapper>
        <ParkingLotsGrid>
          {
            parkingLots.length > 0 && parkingLots.map(parckingLot => (
              <ParkingLotCard
                parckingLot={parckingLot}
              />
            ))
          }
        </ParkingLotsGrid>
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
