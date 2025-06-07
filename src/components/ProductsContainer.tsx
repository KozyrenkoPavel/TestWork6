import HeaderProducts from "./HeaderProducts";
import FooterProducts from "./FooterProducts";
import styles from "./styles.module.scss";

export default function ProjectContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.productsContainer}>
      <HeaderProducts />

      {children}

      <FooterProducts />
    </div>
  );
}
