"use client";

import { useAuth } from "@/hook/AuthProvider";
import logo from "../img/logo.png";
import { useDispatch } from "react-redux";
import { updateProductsList } from "@/store/productsSlice";

export default function HeaderProducts() {
  const { token, setToken } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken("");
    dispatch(updateProductsList([]));
  };

  return (
    <header>
      <div>
        <h1>Abelohost Shop</h1>
        <img src={logo.src} />
        {token && <button onClick={() => handleLogout()}>Logout</button>}
      </div>

      {token && (
        <div>
          <span>
            <label>First name</label>
            <p>admin</p>
          </span>
          <span>
            <label>Last name</label>
            <p>admin</p>
          </span>
        </div>
      )}
    </header>
  );
}
