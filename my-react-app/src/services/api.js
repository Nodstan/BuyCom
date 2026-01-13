import axios from "axios";

const API = axios.create({
  baseURL: "https://buy-com-backend.vercel.app/api",
});

export default API;
