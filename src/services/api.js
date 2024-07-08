import axios from "axios";
// bibliota para consumir req HTTP
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
