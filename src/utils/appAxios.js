import axios from "axios";

export const appAxios = axios.create({
  baseURL: "https://61e99b6a7bc0550017bc63d2.mockapi.io/api",
  withCredentials: false,
  headers: {
    tokenX: "myToken",
    "Content-Type": "application/json",
  },
});
