import React from 'react';

import {
  SelectInputWrapper,
  Label,
  Select,
  Option
} from './styles';

const SelectInput = ({ label, options }) => {
  return (
    <SelectInputWrapper>
      <Label>{label}</Label>
      <Select>
        {
          options.map((option, index) => (
            <Option
              key={index}
              value={option.value}
            >
              {option.name}
            </Option>
          ))
        }
      </Select>
    </SelectInputWrapper>
  );
};

export default SelectInput;
