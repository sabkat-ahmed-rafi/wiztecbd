import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_API_BASE_URL || process.env.VITE_API_BASE_URL}`,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY || process.env.VITE_API_KEY
  },
});


export default api;