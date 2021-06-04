import styled from "styled-components";

export const SelectInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 200px;
`;

export const Label = styled.span`
  margin: 0 0 4px 1rem;
  font-weight: 500;
  font-size: 12px;
  color: #363636;
  text-transform: uppercase;
`;

export const Select = styled.select`
  height: 28px;
  width: 100%;
  padding: 0 1rem;
  background: #fff;
  border: 2px solid rgba(54, 54, 54, 0.2);
  border-radius: 8px;
  outline: none;
  filter: drop-shadow(1px 1px 36px rgba(54, 54, 54, 0.16));

  &:focus {
    border: 2px solid #b0b0b0;
  }
`;

export const Option = styled.option`
`;