import axios from "axios";
import { TRequest } from "../types/types";

const API_URL = "https://dummyjson.com/products/?limit=12";

export const getProducts = async (token?: string) => {
  if (!token) throw new Error("Токен отсутствует");

  const response = await axios.get<TRequest>(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response ? response.data.products : [];
};
