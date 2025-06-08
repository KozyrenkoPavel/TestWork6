import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Product from "./Product";
import { IProducts } from "../interface/interface";
import styles from "./styles.module.scss";
import Spiner from "./Spiner";

export default function ProductsList() {
  const products = useSelector(
    (state: RootState) => state.productsList.products
  );

  const isLoading = useSelector(
    (state: RootState) => state.productsList.isLoading
  );

  return (
    <>
      {isLoading && <Spiner />}

      {!isLoading && (
        <div className={styles.productsList}>
          <h1 className={styles.productsList__title}>Latest prodcts</h1>
          <div className={styles.productsList__items}>
            {products.map((item: IProducts) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
