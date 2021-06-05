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
import useOrderBy from '../../hooks/useOrderBy';
import useFetch from '../../hooks/useFetch';

const HomePage = () => {

  // Consts
  const OPTIONS = [
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
  const OPTIONS_VALUES = OPTIONS.map(option => option.value);

  // States
  const [searchLocation, setSearchLocation] = useState("");
  const [totalParkingLots, setTotalParkingLots] = useState(0);
  const [parkingLots, setParkingLots] = useState([]);
  const [[lng, lat], setCoordinates] = useState([-122.4364, 37.7608]);
  const [lastSearch, setLastSearch] = useState("");

  // Fetching Data
  const { loading, error, data, fetchData } = useFetch({
    request: api.getAllParkingLots,
    queryStrings: {
      location: searchLocation,
      offset: 0
    }
  });

  // Order By Feature
  const { orderedLots, orderBy, setOrderBy } = useOrderBy({
    parkingLots,
    options: OPTIONS_VALUES
  });

  // Setting States
  useEffect(() => {
    if (!data) return;
    setParkingLots(data.businesses);
    setTotalParkingLots(data.total);
    setCoordinates([data.region.center.longitude, data.region.center.latitude]);
  }, [data]);

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


  // const fetchNextPage = async () => {
  //   // Prevent of fetching a new page if the first page is not loaded.
  //   if (parkingLots.length <= 0) return;
  //   // Prevent of fetching more date if we are already in the last page.
  //   if (parkingLots.length === totalParkingLots) return;
  //   setLoading(true);

  //   let res = await api.getAllParkingLots({
  //     location: searchLocation,
  //     offset: parkingLots.length
  //   });
  //   setParkingLots([...parkingLots, ...res.data.businesses]);
  //   setLoading(false);
  // };

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
            setLastSearch={setLastSearch}
            fetchParkingLots={fetchData}
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
        <ParkingLotsGrid>
          {
            orderedLots.length > 0 && orderedLots.map((parckingLot, index) => (
              <ParkingLotCard
                key={parckingLot.id}
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
