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

  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [totlParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingLots] = useState([]);

  // TODO: Refactor and clean logic from HomePage
  const observer = React.useRef();
  const lastCardElement = React.useCallback(node => {
    console.log(node);
    console.log(loading);
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // The last card it is visible. Fetch more data.
        fetchNextPage();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  const fetchParkingLots = async () => {
    // Protect from fetching without a location
    if (searchLocation.length <= 0) return;
    setLoading(true);

    let res = await api.getAllParkingLots({
      location: searchLocation,
      offset: parkingLots.length
    });
    setParkingLots(res.data.businesses);
    setTotalParkingLots(res.data.total);
    setLoading(false);
  };

  const fetchNextPage = async () => {
    // Prevent of fetching a new page if the first page is not loaded.
    if (parkingLots.length <= 0) return;
    setLoading(true);

    let res = await api.getAllParkingLots({
      location: searchLocation,
      offset: parkingLots.length
    });
    setParkingLots([...parkingLots, ...res.data.businesses]);
    setLoading(false);
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
            parkingLots.length > 0 && parkingLots.map((parckingLot, index) => {
              if (parkingLots.length === index + 1) {
                return (
                  <ParkingLotCard
                    ref={lastCardElement}
                    key={parckingLot.id}
                    parckingLot={parckingLot}
                  />
                );
              } else {
                return (
                  <ParkingLotCard
                    key={parckingLot.id}
                    parckingLot={parckingLot}
                  />
                );
              }
            }
            )
          }
        </ParkingLotsGrid>
        {/* <button onClick={fetchNextPage}>Load More</button> */}
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
