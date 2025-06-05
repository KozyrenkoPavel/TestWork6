"use client";

import axios from "axios";
import { useState } from "react";

type Tprops = {
  onLogin: (token: string) => void;
};

export default function LoginPages({ onLogin }: Tprops) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
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
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
