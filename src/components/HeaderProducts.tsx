"use client";

import { useAuth } from "@/hook/AuthProvider";
import { useDispatch } from "react-redux";
import { updateProductsList } from "@/store/productsSlice";
import styles from "./styles.module.scss";

export default function HeaderProducts() {
  const { token, setToken } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken("");
    dispatch(updateProductsList([]));
  };

  return (
    <header className={styles.headerProducts}>
      <div className={styles.headerProducts__logo}>
        <h1>Abelohost Shop</h1>

        {token && <button onClick={() => handleLogout()}>Logout</button>}
      </div>

      {token && (
        <div className={styles.headerProducts__user}>
          <div>
            <label>First name: </label>
            admin
          </div>
          <div>
            <label>Last name: </label>
            admin
          </div>
        </div>
      )}
    </header>
  );
}
