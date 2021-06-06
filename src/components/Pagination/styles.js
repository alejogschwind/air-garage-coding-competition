import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  width: 36px;
  height: 36px;
  margin: 1rem 0.5rem;
  background: #888888;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;


  ${props => props.active && `
    background: #363636;
  `}

  ${props => props.clickable && `
    &:hover {
      background: #363636;
    }
  `}

  ${props => props.clickable && props.arrow && `
    background: #363636;
  `}

  ${props => !props.clickable && `
    cursor: default;
  `}
`;

export const PageNumber = styled.div`
  width: 36px;
  height: 36px;
  background: #888888;
  border-radius: 8px;
  color: white;

`;

export const NextPage = styled.div`
  width: 36px;
  height: 36px;
  background: #363636;
  border-radius: 8px;
  color: white;
`;
