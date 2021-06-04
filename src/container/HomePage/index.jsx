import React, { useEffect, useState } from 'react';
import api from '../../api';

import ParkingLotCard from '../../components/ParkingLotCard';
import SearchInput from '../../components/SearchInput';
import SelectInput from '../../components/SelectInput';
import Map from '../../components/Map';

import {
  HomePageWrapper,
  MainWrapper,
  MapWrapper,
  SearchInputWrapper,
  FilterSection,
  SearchInfo,
  Location,
  TotalResults,
  ParkingLotsGrid,
  FilterInputs
} from './styles';
import { calculateScore } from '../../helper';

const HomePage = () => {

  const options = [
    {
      label: "Default",
      value: "default"
    },
    {
      label: "Average Ranking ↑",
      value: "ranking-a"
    },
    {
      label: "Average Ranking ↓",
      value: "ranking-d"
    },
    {
      label: "Number of Reviews ↑",
      value: "review-a"
    },
    {
      label: "Number of Reviews ↓",
      value: "review-d"
    },
    {
      label: "Score ↑",
      value: "score-a"
    },
    {
      label: "Score ↓",
      value: "score-d"
    },
  ];

  const OPTIONS_LIST = [
    "default",
    "ranking-a",
    "ranking-d",
    "review-a",
    "review-d",
    "score-a",
    "score-d",
  ];

  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [totalParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingLots] = useState([]);
  const [orderedLots, setOrderedLots] = useState([]);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [lastSearch, setLastSearch] = useState("");
  const [orderBy, setOrderBy] = useState("default");

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
    setLng(res.data.region.center.longitude);
    setLat(res.data.region.center.latitude);
    setLoading(false);
  };

  const fetchNextPage = async () => {
    // Prevent of fetching a new page if the first page is not loaded.
    if (parkingLots.length <= 0) return;
    // Prevent of fetching more date if we are already in the last page.
    if (parkingLots.length === totalParkingLots) return;
    setLoading(true);

    let res = await api.getAllParkingLots({
      location: searchLocation,
      offset: parkingLots.length
    });
    setParkingLots([...parkingLots, ...res.data.businesses]);
    setLoading(false);
  };

  useEffect(() => {
    setOrderedLots(() => {
      switch (orderBy) {
        case OPTIONS_LIST[1]:
          return orderedLots.concat().sort((a, b) => a.rating - b.rating);
        case OPTIONS_LIST[2]:
          return orderedLots.concat().sort((a, b) => b.rating - a.rating);
        case OPTIONS_LIST[3]:
          return orderedLots.concat().sort((a, b) => a.review_count - b.review_count);
        case OPTIONS_LIST[4]:
          return orderedLots.concat().sort((a, b) => b.review_count - a.review_count);
        case OPTIONS_LIST[5]:
          return parkingLots.concat().sort((a, b) => calculateScore(a.rating, a.review_count) - calculateScore(b.rating, b.review_count));
        case OPTIONS_LIST[6]:
          return parkingLots.concat().sort((a, b) => calculateScore(b.rating, b.review_count) - calculateScore(a.rating, a.review_count));
        default:
          return parkingLots;
      }
    });
  }, [orderBy, parkingLots]);

  return (
    <HomePageWrapper>
      <MapWrapper>
        <Map
          lng={lng}
          lat={lat}
          parkingLots={orderedLots}
        />
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
            <FilterInputs>
              <SelectInput
                label={"Order by"}
                options={options}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
            </FilterInputs>
          </FilterSection>
        }
        <ParkingLotsGrid>
          {
            orderedLots.length > 0 && orderedLots.map((parckingLot, index) => {
              if (orderedLots.length === index + 1) {
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
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
