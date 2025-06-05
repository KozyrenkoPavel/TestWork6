"use client";

import { useAuth } from "../hook/AuthProvider";

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { IProducts } from "../interface/interface";

export default function HomePages() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { token, setToken } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    setProducts([]);
  };

  // handleLogout();

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
    if (token) fetchProducts(token);
  }, [token]);

  return <div>Home</div>;
}
