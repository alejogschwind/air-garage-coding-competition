import axios from "axios";

const api = {
  getAllParkingLots: async () =>
    axios.get("http://127.0.0.1:8000/api/parking")
};

export default api;