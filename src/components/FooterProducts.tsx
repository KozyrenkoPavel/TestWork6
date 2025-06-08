"use client";

import { useAuth } from "@/hook/AuthProvider";
import styles from "./styles.module.scss";

export default function FooterProducts() {
  const { token } = useAuth();
  const curretYear: string = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      <hr className={styles.footer__separator} />
      <span>{curretYear} </span>
      {token && <span>Logged as admin@mail.ru</span>}
    </footer>
  );
}
