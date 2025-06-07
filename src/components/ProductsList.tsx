import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Product from "./Product";
import { IProducts } from "../interface/interface";

export default function ProductsList() {
  const products = useSelector(
    (state: RootState) => state.productsList.products
  );

  return (
    <div>
      {products.map((item: IProducts) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
