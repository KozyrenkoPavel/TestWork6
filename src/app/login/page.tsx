"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../hook/AuthProvider";
import LoginPages from "../pages/LoginPages";

export default function Loading() {
  const { setToken } = useAuth();
  const router = useRouter();

  const handleLogin = (newToken: string) => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
    router.push("/");
  };

  return (
    <div>
      <LoginPages onLogin={handleLogin} />
    </div>
  );
}
