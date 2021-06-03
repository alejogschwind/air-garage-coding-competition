import styled from "styled-components";

export const HomePageWrapper = styled.div`

`;

export const MapWrapper = styled.div`
  height: 40vh;
  background: #36363617;
`;

export const MainWrapper = styled.section`
  width: 90%;
  margin: 0 5%;
`;

export const SearchInputWrapper = styled.div`
  height: fit-content;
  margin-top: -18px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParkingLotsGrid = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(283px, 1fr));
  grid-template-rows: repeat(2, 256px);

`;