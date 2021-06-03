import React from 'react';
import Button from '../Button';
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

const ParkingLotCard = React.forwardRef(({ parckingLot }, ref) => {
  return (
    <ParkingLotCardWrapper ref={ref}>
      <TopSection>
        <Score>{(Math.round(parckingLot.rating * parckingLot.review_count / (parckingLot.review_count + 1) * 100) / 100).toFixed(2)}</Score>
        < Title >{parckingLot.name}</Title>
      </TopSection>
      <RatingStats>
        <RankingAverage
          averageRanking={parckingLot.rating}
          numberOfReviews={parckingLot.review_count}
        />
      </RatingStats>
      <AddressInfo>
        <Label>Address:</Label>
        {
          parckingLot.location &&
          <Address>{parckingLot.location.display_address[0]} {parckingLot.location.display_address[1]}</Address>
        }
      </AddressInfo>
      <BottomSection>
        {
          parckingLot.image_url &&
          <ImageWrapper>
            <img src={parckingLot.image_url} alt={parckingLot.name} />
          </ImageWrapper>
        }
        <ButtonGroupe>
          <Button type="secondary">Add to list</Button>
          <Button>See it in yeps</Button>
        </ButtonGroupe>
      </BottomSection>
    </ParkingLotCardWrapper>
  );
});

export default ParkingLotCard;