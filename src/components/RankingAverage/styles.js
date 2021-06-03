import styled from "styled-components";

export const RankingAverageWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
 `;

export const StarsWrapper = styled.div`
  height: 16px;
  margin-bottom: 4px;
  display: flex;
  align-items: flex-end;
  /* justify-content: center; */

  & > svg {
    height: 100%;
  }
`;

export const Average = styled.span`
  margin: 0 6px;
  height: fit-content;
  font-weight: bold;
  font-size: 16px;
  color: #363636;
`;

export const NumberOfReviews = styled.p`
  height: fit-content;
  font-weight: 400;
  font-size: 12px;
  color: #888888;
`;