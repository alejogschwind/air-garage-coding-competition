import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  FilterInputs,
  WelcomeMessage
} from './styles';
import useOrderBy from '../../hooks/useOrderBy';
import useFetch from '../../hooks/useFetch';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';

const HomePage = () => {

  // Consts
  const OPTIONS = [
    {
      label: "Best Match",
      value: "best_match"
    },
    {
      label: "Rating",
      value: "rating"
    },
    {
      label: "Number of Reviews",
      value: "review_count"
    }
  ];
  const OPTIONS_VALUES = OPTIONS.map(option => option.value);
  const numOfItemsPerPage = 20;

  // States
  const [searchLocation, setSearchLocation] = useState("");
  const [totalParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingLots] = useState([]);
  const [[lng, lat], setCoordinates] = useState([-122.4364, 37.7608]);
  const [lastSearch, setLastSearch] = useState("");
  const [orderBy, setOrderBy] = useState(OPTIONS_VALUES[0]);
  const [offset, setOffset] = useState(0);

  // TODO: In the first place, tried to order the items on the frontend. But next reliced that, i am 
  // only sorting the elements on one page and not in all the collection.
  // And the API is limited to request 50 per page, so i am limited to the sorting options that the API
  // provides. (That means i could not sort by score, al menos que cree mi propia API.)

  // Order By Feature
  // const { orderedLots, orderBy, setOrderBy } = useOrderBy({
  //   parkingLots,
  //   options: OPTIONS_VALUES
  // });

  // Pagination Feature
  const { currentPage, lastPage, setCurrentPage } = usePagination({
    totalItems: totalParkingLots,
    numOfItemsPerPage
  });

  // Fetching Data
  const { loading, error, data, fetchData } = useFetch({
    request: api.getAllParkingLots,
    queryStrings: {
      location: searchLocation,
      offset,
      sort_by: orderBy
    }
  });

  // Setting States
  useEffect(() => {
    if (!data) return;
    setParkingLots(data.businesses);
    setTotalParkingLots(data.total);
    setCoordinates([data.region.center.longitude, data.region.center.latitude]);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    fetchData();
  }, [orderBy, offset]);

  const firstUpdate = useRef(true);
  useEffect(() => {
    // We dont want to run it in the first render.
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    if (firstUpdate.current) return;
    setOffset((currentPage - 1) * numOfItemsPerPage);
  }, [currentPage]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  // TODO: Refactor and clean logic from HomePage
  // const observer = React.useRef();
  // const lastCardElement = React.useCallback(node => {
  //   console.log(node);
  //   console.log(loading);
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       // The last card it is visible. Fetch more data.
  //       fetchNextPage();
  //     }
  //   });
  //   if (node) observer.current.observe(node);
  // }, [loading]);


  const newSearchReset = async () => {
    setOffset(0);
    setCurrentPage(1);
  };

  return (
    <HomePageWrapper>
      <MapWrapper>
        <Map
          lng={lng}
          lat={lat}
          parkingLots={parkingLots}
        />
      </MapWrapper>
      <MainWrapper>
        <SearchInputWrapper>
          <SearchInput
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            setLastSearch={setLastSearch}
            newSearchReset={newSearchReset}
            fetchData={fetchData}
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
                options={OPTIONS}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
            </FilterInputs>
          </FilterSection>
        }
        {
          totalParkingLots > 0 ?
            <ParkingLotsGrid>
              {
                parkingLots.map((parckingLot, index) => (
                  <ParkingLotCard
                    key={parckingLot.id}
                    parckingLot={parckingLot}
                  />
                ))
              }
            </ParkingLotsGrid> :
            <WelcomeMessage>
              <strong>
                Hi there!
              </strong>
              <p>
                You could start by searching for a place.
              </p>
            </WelcomeMessage>
        }
        {
          totalParkingLots > 0 &&
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            setCurrentPage={setCurrentPage}
          />
        }
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
