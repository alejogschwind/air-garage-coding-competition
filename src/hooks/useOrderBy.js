import { useState, useEffect } from "react";
import { calculateScore } from "../helper";

const useOrderBy = ({ parkingLots, options }) => {

  // TODO:Make the hook more generic, now it is just for take out logic from Home Page.
  const [orderedLots, setOrderedLots] = useState([]);
  const [orderBy, setOrderBy] = useState(options[0]);

  useEffect(() => {
    setOrderedLots(() => {
      switch (orderBy) {
        case options[1]:
          return orderedLots.concat().sort((a, b) => a.rating - b.rating);
        case options[2]:
          return orderedLots.concat().sort((a, b) => b.rating - a.rating);
        case options[3]:
          return orderedLots.concat().sort((a, b) => a.review_count - b.review_count);
        case options[4]:
          return orderedLots.concat().sort((a, b) => b.review_count - a.review_count);
        case options[5]:
          return orderedLots.concat().sort((a, b) => calculateScore(a.rating, a.review_count) - calculateScore(b.rating, b.review_count));
        case options[6]:
          return orderedLots.concat().sort((a, b) => calculateScore(b.rating, b.review_count) - calculateScore(a.rating, a.review_count));
        default:
          return parkingLots;
      }
    });
  }, [orderBy, parkingLots]);


  return { orderedLots, orderBy, setOrderBy };
};

export default useOrderBy;