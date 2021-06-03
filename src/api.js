import axios from "axios";

const api = {
  getAllParkingLots: async (location) =>
    axios.get(`http://127.0.0.1:8000/api/parking`, {
      params: {
        location
      }
    })
};

export default api;