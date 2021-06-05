import React from 'react';

import { ReactComponent as SearchIcon } from "../../assets/svgs/search_icon.svg";
import { SearchInputWrapper, Input, Button } from './styles';

const SearchInput = ({ searchLocation, setSearchLocation, setLastSearch, fetchParkingLots, ...props }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Protect from searching without an input
    if (searchLocation.length <= 0) return;
    setLastSearch(searchLocation);
    fetchParkingLots();
  };

  const handleChange = (e) => {
    setSearchLocation(e.target.value);
  };

  return (
    <SearchInputWrapper onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search for a location ..."
        {...props}
        value={searchLocation}
        onChange={handleChange}
      />
      <Button disabled={searchLocation.length <= 0}>
        <SearchIcon />
      </Button>
    </SearchInputWrapper>
  );
};

export default SearchInput;
