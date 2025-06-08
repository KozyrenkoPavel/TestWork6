import { IProducts } from "../interface/interface";
import styles from "./styles.module.scss";

export default function Product({
  id,
  title,
  images,
  price,
  category,
}: IProducts) {
  const img: string | undefined = images[0];

  return (
    <div className={styles.productsList__productItem}>
      <img src={images[0]}></img>
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4 className={styles.price}>{price}$</h4>
      <button className={styles.btnItem}>Add to cart</button>
    </div>
  );
}
