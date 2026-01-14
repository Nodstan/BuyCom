import axios from "axios";

const API = axios.create({
  baseURL: "https://buycom-api.vercel.app/api",
});

export default API;
