import React from 'react';

import { ReactComponent as SearchIcon } from "../../assets/svgs/search_icon.svg";
import { SearchInputWrapper, Input, Button } from './styles';

const SearchInput = ({ ...props }) => {

  const [search, setSearch] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      // Search
      console.log("Searching...");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchInputWrapper onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search for a location ..."
        {...props}
        onChange={handleChange}
      />
      <Button>
        <SearchIcon />
      </Button>
    </SearchInputWrapper>
  );
};

export default SearchInput;
