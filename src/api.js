import axios from "axios";

const api = axios.create({
  baseURL: "https://village-news-backends.onrender.com"
});

export default api;