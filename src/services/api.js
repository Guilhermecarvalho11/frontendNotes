import axios from "axios";
// bibliota para consumir req HTTP
export const api = axios.create({
  baseURL: "https://note-backend-ro72.onrender.com",
});
