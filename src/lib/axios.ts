import axios from "axios";

export const api = axios.create({
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})