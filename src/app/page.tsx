"use client";

import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import { IProducts } from "./interface/interface";

export default function Home() {
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchProducts = async () => {
    const response = await getProducts();

    if (response) setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Home</div>;
}
