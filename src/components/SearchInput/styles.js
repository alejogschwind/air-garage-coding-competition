import styled from "styled-components";

export const SearchInputWrapper = styled.form`
  height: 36px;
  width: 100%;
  max-width: 512px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  width: calc(100% - 42px);
  padding: 0 1rem;
  /* margin-right: 0px; */
  background: #fcfcfc;
  border: 2px solid transparent;
  border-radius: 8px 0 0 8px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #363636;

  filter: drop-shadow(1px 1px 36px rgba(54, 54, 54, 0.16));

  &:hover {
    border: 2px solid rgba(0,0,0,0.08);
  }

  &:focus {
    border: 2px solid #bababa;
    background: white;
  }

  &::placeholder {
    font-weight: 400;
    color: #bababa;
  }
`;

export const Button = styled.button`
  height: 36px;
  width: 42px;
  background: #363636;
  color: #f1f1f1;
  border: 2px solid transparent;
  border-radius: 0 8px 8px 0;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  
  &:hover {
    border: 2px solid #303030;
  }
`;