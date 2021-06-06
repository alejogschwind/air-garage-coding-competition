import axios from "axios";

const api = {
  getAllParkingLots: async ({ location, offset, sort_by }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/api/parking`, {
      params: {
        location,
        offset,
        sort_by
      }
    })
};

export default api;