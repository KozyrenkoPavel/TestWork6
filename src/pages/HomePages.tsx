"use client";

import { useAuth } from "../hook/AuthProvider";
import { useEffect } from "react";
import { getProducts } from "../app/api/products";
import { useDispatch } from "react-redux";
import { setIsLoading, updateProductsList } from "../store/productsSlice";
import ProductsList from "../components/ProductsList";

export default function HomePages() {
  const { token } = useAuth();

  const dispatch = useDispatch();

  const fetchProducts = async (authToken: string) => {
    if (!authToken) return;

    dispatch(setIsLoading(true));

    try {
      const response = await getProducts(authToken);
      if (response) {
        dispatch(updateProductsList(response));
      }
    } catch (err) {
      console.error("Ошибка получения продуктов", err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (token) fetchProducts(token);
  }, [token]);

  return (
    <div>
      <ProductsList />
    </div>
  );
}
