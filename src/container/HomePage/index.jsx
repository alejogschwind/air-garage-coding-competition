import React, { useState } from 'react';
import api from '../../api';

import ParkingLotCard from '../../components/ParkingLotCard';
import SearchInput from '../../components/SearchInput';

import {
  HomePageWrapper,
  MainWrapper,
  MapWrapper,
  SearchInputWrapper,
  FilterSection,
  SearchInfo,
  Location,
  TotalResults,
  ParkingLotsGrid
} from './styles';

const HomePage = () => {

  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [totalParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingLots] = useState([]);
  const [lastSearch, setLastSearch] = useState("");

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
    setLastSearch(searchLocation);
    setLoading(true);

    let res = await api.getAllParkingLots({
      location: searchLocation,
      offset: 0
    });
    setParkingLots(res.data.businesses);
    setTotalParkingLots(res.data.total);
    setLoading(false);
  };

  const fetchNextPage = async () => {
    // Prevent of fetching a new page if the first page is not loaded.
    if (parkingLots.length <= 0) return;
    // Prevent of fetching more date if we already fetch the last page.
    if (parkingLots.length === totalParkingLots) return;
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
        {
          parkingLots.length > 0 &&
          <FilterSection>
            <SearchInfo>
              <Location>
                {lastSearch.toUpperCase()}
              </Location>
              <TotalResults>
                Total Results {totalParkingLots}
              </TotalResults>
            </SearchInfo>
          </FilterSection>
        }
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
