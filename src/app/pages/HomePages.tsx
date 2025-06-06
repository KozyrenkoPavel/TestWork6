"use client";

import { useAuth } from "../hook/AuthProvider";

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { IProducts } from "../interface/interface";
import { useDispatch } from "react-redux";
import { updateProductsList } from "../store/productsSlice";
import ProductsList from "../components/ProductsList";

export default function HomePages() {
  const { token, setToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const dispatsh = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    dispatsh(updateProductsList([]));
  };

  const fetchProducts = async (authToken: string) => {
    if (!authToken) return;
    setIsLoading(true);

    try {
      const response = await getProducts(authToken);
      if (response) {
        dispatsh(updateProductsList(response));
      }
    } catch (err) {
      console.error("Ошибка получения продуктов", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProducts(token);
  }, [token]);

  return (
    <div>
      <ProductsList />
      {/* <button onClick={() => handleLogout()}>LogOut</button> */}
    </div>
  );
}
