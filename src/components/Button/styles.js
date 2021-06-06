import styled from "styled-components";

export const ButtonWrapper = styled.a`
  width: 100%;
  height: 36px;
  background: #363636;
  color: #fcfcfc;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* Secondary Button Styles */
  ${props => props.type === "secondary" ? `
    background: transparent;
    color: #363636;
    border: 2px solid #363636;
  ` : ""}
`;