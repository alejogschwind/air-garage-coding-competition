import React from 'react';


import ParkingLotCard from '../../components/ParkingLotCard';
import SearchInput from '../../components/SearchInput';

import {
  HomePageWrapper,
  MainWrapper,
  MapWrapper,
  SearchInputWrapper,
  ParkingLotsGrid
} from './styles';

const HomePage = ({ parkingLots }) => {
  console.log(parkingLots);
  return (
    <HomePageWrapper>
      <MapWrapper>

      </MapWrapper>
      <MainWrapper>
        <SearchInputWrapper>
          <SearchInput />
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
