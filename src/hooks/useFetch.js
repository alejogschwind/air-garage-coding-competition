import { useState } from "react";

const useFetch = ({ request, queryStrings }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await request(queryStrings);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  // let res = await api.getAllParkingLots({
  //   location: searchLocation,
  //   offset: 0
  // });
  // BEFORE REQ
  // if (searchLocation.length <= 0) return;
  // setLastSearch(searchLocation);

  // Protect from fetching without a location

  // setData(res.data.businesses);
  // setTotalParkingLots(res.data.total);
  // setLng(res.data.region.center.longitude);
  // setLat(res.data.region.center.latitude);

  return { loading, error, data, fetchData };
};

export default useFetch;