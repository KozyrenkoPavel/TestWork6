"use client";

import { useAuth } from "@/hook/AuthProvider";

export default function FooterProducts() {
  const { token } = useAuth();
  const curretYear: string = new Date().getFullYear().toString();

  console.log(token);

  return (
    <div>
      {curretYear}
      {token && <span>Logged as admin@mail.ru</span>}
    </div>
  );
}
