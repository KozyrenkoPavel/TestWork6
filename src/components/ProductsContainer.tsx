import HeaderProducts from "./HeaderProducts";
import FooterProducts from "./FooterProducts";

export default function ProjectContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderProducts />

      {children}

      <FooterProducts />
    </>
  );
}
