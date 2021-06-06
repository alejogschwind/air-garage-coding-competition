import styled from "styled-components";

export const ParkingLotCardWrapper = styled.div`
  width: 280px;
  width: 100%;
  height: 256px;
  padding: 1rem;
  background: #fcfcfc;
  border-radius: 8px;
  box-shadow: 1px 1px 18px rgba(54, 54, 54, 0.18);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Score = styled.span`
  width: 30%;
  margin: 0 1rem;
  font-size: 32px;
  font-weight: bold;
  color: #FA824D;
`;

export const Title = styled.h1`
  width: 70%;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: #363636;
`;

export const RatingStats = styled.div`

`;

export const AddressInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;

`;

export const Label = styled.span`
  margin-bottom: 0.2rem;
  text-align: left;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: #363636;
  
  `;

export const Address = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  color: #888888;
`;

export const BottomSection = styled.div`
  height: 80px;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  margin-right: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ButtonGroupe = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;