import React from 'react';

import {
  SelectInputWrapper,
  Label,
  Select,
  Option
} from './styles';

const SelectInput = ({ label, options, setOrderBy }) => {

  const handleSelect = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <SelectInputWrapper>
      <Label>{label}</Label>
      <Select onChange={handleSelect}>
        {
          options.map((option, index) => (
            <Option
              key={index}
              value={option.value}
            >
              {option.label}
            </Option>
          ))
        }
      </Select>
    </SelectInputWrapper>
  );
};

export default SelectInput;
