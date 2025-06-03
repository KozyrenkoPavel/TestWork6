import axios from "axios";
import { TRequest } from "../types/types";

const API_URL = "https://dummyjson.com/products/?limit=12";

export const getProducts = async () => {
  const response = await axios.get<TRequest>(API_URL);

  return response ? response.data.products : [];
};
