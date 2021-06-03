import React from 'react';
import RankingAverage from '../RankingAverage';

import {
  ParkingLotCardWrapper,
  TopSection,
  Score,
  Title,
  RatingStats,
  AddressInfo,
  Label,
  Address,
  BottomSection,
  ImageWrapper,
  ButtonGroupe
} from './styles';

const ParkingLotCard = () => {
  return (
    <ParkingLotCardWrapper>
      <TopSection>
        <Score>3.31</Score>
        <Title>Delancey and Essex Municipal Parking Garage</Title>
      </TopSection>
      <RatingStats>
        <RankingAverage
          averageRanking={5}
          numberOfReviews={17}
        />
      </RatingStats>
      <AddressInfo>
        <Label>Address:</Label>
        <Address>107 Essex St Manhattan, NY 10002</Address>
      </AddressInfo>
      <BottomSection>
        <ImageWrapper>
          <img src={"https://s3-media2.fl.yelpcdn.com/bphoto/56BTu1V6_cQDBn68ajAlkA/o.jpg"} alt="asd" />
        </ImageWrapper>
        <ButtonGroupe>
          {/* <Button type="secondary">Add to favorite</Button> */}
          {/* <Button>See it in yeps</Button> */}
        </ButtonGroupe>
      </BottomSection>
    </ParkingLotCardWrapper>
  );
};

export default ParkingLotCard;