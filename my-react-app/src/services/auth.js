import API from "./api";

export const register = async (payload) => {
  const { data } = await API.post("/auth/register", payload);
  localStorage.setItem("auth", JSON.stringify(data));
  return data;
};

export const login = async (payload) => {
  const { data } = await API.post("/auth/login", payload);
  localStorage.setItem("auth", JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const getAuth = () => {
  const raw = localStorage.getItem("auth");
  return raw ? JSON.parse(raw) : null;
};

