"use client";

import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

type Tprops = {
  onLogin: (token: string) => void;
};

export default function LoginPages({ onLogin }: Tprops) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      onLogin(response.data.token);
    } catch (err) {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.login__input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.login__input}
      />
      <button className={styles.login__btn} type="submit">
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
