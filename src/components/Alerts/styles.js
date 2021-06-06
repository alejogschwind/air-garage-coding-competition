import styled from "styled-components";

export const AlertsWrapper = styled.div`

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

export const ErrorMessage = styled(WelcomeMessage)`
  background: linear-gradient(90.19deg, #888888 0%, #888888bb 100%);
`;