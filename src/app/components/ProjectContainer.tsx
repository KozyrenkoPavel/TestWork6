"use client";

import { useDispatch } from "react-redux";
import { useAuth } from "../hook/AuthProvider";
import { updateProductsList } from "../store/productsSlice";
import { useRouter } from "next/navigation";

export default function ProjectContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token, setToken } = useAuth();
  const dispatsh = useDispatch();
  const router = useRouter();

  const handleLogin = (newToken: string) => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    dispatsh(updateProductsList([]));
  };

  return (
    <>
      <header>
        header
        {!token ? (
          <button onClick={() => handleLogin(token)}>LogIn</button>
        ) : (
          <button onClick={handleLogout}>LogOut</button>
        )}
      </header>
      {children}
      <footer>footer</footer>
    </>
  );
}
