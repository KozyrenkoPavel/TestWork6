"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { IProducts } from "../interface/interface";
import LoadingPages from "./LoadingPages";

export default function HomePages() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (newToken: string) => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
    fetchProducts(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    setProducts([]);
  };

  const fetchProducts = async (authToken: string) => {
    if (!authToken) return;

    try {
      const response = await getProducts(authToken);
      setProducts(response);
    } catch (err) {
      console.error("Ошибка получения продуктов", err);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("jwtToken");

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) fetchProducts(token);
  }, [token]);

  console.log(products);

  if (!token)
    return (
      <div>
        <h2>Пожалуйста, войдите</h2>
        <LoadingPages onLogin={handleLogin} />
      </div>
    );

  return <div>Home</div>;
}
