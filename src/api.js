import axios from "axios";

const api = {
  getAllParkingLots: async ({ location, offset }) =>
    axios.get(`http://127.0.0.1:8000/api/parking`, {
      params: {
        location,
        offset
      }
    })
};

export default api;