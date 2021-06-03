import React, { useEffect } from 'react';

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

  const [starArray, setsStarArray] = React.useState([]);

  const createStarArray = (average) => {
    if (average < 0 || average > 5) {
      // Case wrong average is passed to the component
      setsStarArray([0, 0, 0, 0, 0]);
      return;
    }

    const aux = [];
    while (average > 0) {
      if (average - 1 >= 0) {
        aux.push(1);
        average -= 1;
      } else {
        aux.push(0.5);
        average = 0;
      }
    }
    while (aux.length !== 5) {
      aux.push(0);
    }
    setsStarArray(aux);
  };

  useEffect(() => {
    createStarArray(averageRanking);
  }, [averageRanking]);

  return (
    <RankingAverageWrapper>
      {
        starArray.length > 0 &&
        <StarsWrapper>
          {
            starArray.map((star, index) => {
              switch (star) {
                case 1:
                  return <DarkStar key={index} />;
                case 0.5:
                  return <HalfStar key={index} />;
                default:
                  return <LightStar key={index} />;
              }
            })
          }
        </StarsWrapper>
      }
      <Average>{averageRanking}</Average>
      <NumberOfReviews>({numberOfReviews})</NumberOfReviews>
    </RankingAverageWrapper>
  );
};

export default RankingAverage;
