import axios from "axios";

const api_url = process.env.REACT_APP_DEV ?
  "http://127.0.0.1:8000/" :
  REACT_APP_API_URL;

const api = {
  getAllParkingLots: async ({ location, offset, sort_by }) =>
    axios.get(`${api_url}/api/parking`, {
      params: {
        location,
        offset,
        sort_by
      }
    })
};

export default api;;