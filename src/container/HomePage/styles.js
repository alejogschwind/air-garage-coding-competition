import styled from "styled-components";

export const HomePageWrapper = styled.div`
  max-width: 100vw;
`;

export const MapWrapper = styled.div`
  height: 40vh;
  width: 100%;
  background: #36363617;
  z-index: 0;
`;

export const MainWrapper = styled.section`
  width: 90%;
  margin: 0 5%;
  z-index: 2000;
`;

export const SearchInputWrapper = styled.div`
  height: fit-content;
  margin-top: -18px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterSection = styled.section`
  height: 100%;
  margin: 1rem 0;
  display: flex;
`;

export const SearchInfo = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  color: #363636;
`;

export const FilterInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Location = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin-bottom:6px;
`;

export const TotalResults = styled.span`
  font-weight: 300;
  font-size: 16px;
`;

export const ParkingLotsGrid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(283px, 1fr));
  grid-template-rows: repeat(2, 256px);
`;

export const WelcomeMessage = styled.div`
  width: 100%;
  height: 8rem;
  max-width: 512px;
  padding: 2rem;
  margin: 2rem auto;
  /* background: linear-gradient(90.19deg, #363636 0%, rgba(54, 54, 54, 0.9) 100%); */
  background: linear-gradient(95.4deg, #FA824D 15.96%, rgba(250, 130, 77, 0.9) 100%);
  border-radius: 8px;
  color: #fcfcfc;
  font-size: 20px;
  font-weight: 300;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 4px 10px rgba(54, 54, 54, 0.1);

  & > strong, p {
    width: 100%;
  }

  & > p {
    margin: 0.2rem 0;
    font-size: 16px;
  }
`;