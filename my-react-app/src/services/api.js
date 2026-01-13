import axios from "axios";

const API = axios.create({
  baseURL: "https://buycom-backend.vercel.app/api",
});

export default API;
