import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 5000
}) 

export default productsApi;