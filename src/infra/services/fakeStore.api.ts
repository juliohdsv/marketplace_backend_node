import axios from "axios";

export const fakeStoreApi = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000
}) 

