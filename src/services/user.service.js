import axios from "axios";

const API_URL = "https://jwt03.onrender.com/api/test/";

const getPublicContent = () => axios.get(API_URL + "all");

const getUserBoard = () =>
  axios.get(API_URL + "user", { headers: authHeader() });

const getModeratorBoard = () =>
  axios.get(API_URL + "mod", { headers: authHeader() });

const getAdminBoard = () =>
  axios.get(API_URL + "admin", { headers: authHeader() });

function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService;