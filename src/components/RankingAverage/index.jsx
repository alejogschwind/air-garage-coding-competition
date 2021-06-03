import React from 'react';

import {
  RankingAverageWrapper,
  StarsWrapper,
  Average,
  NumberOfReviews
} from "./styles";

import { ReactComponent as DarkStar } from "../../assets/svgs/darkstar_icon.svg";
import { ReactComponent as LightStar } from "../../assets/svgs/lightstar_icon.svg";
import { ReactComponent as HalfStar } from "../../assets/svgs/halfstar_icon.svg";

const RankingAverage = ({ averageRanking, numberOfReviews }) => {
  return (
    <RankingAverageWrapper>
      <StarsWrapper>
        <DarkStar />
        <DarkStar />
        <DarkStar />
        <HalfStar />
        <LightStar />
      </StarsWrapper>
      <Average>{averageRanking}</Average>
      <NumberOfReviews>({numberOfReviews})</NumberOfReviews>
    </RankingAverageWrapper>
  );
};

export default RankingAverage;
