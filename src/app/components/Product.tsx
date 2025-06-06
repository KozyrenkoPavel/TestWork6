import { IProducts } from "../interface/interface";

export default function Product({
  id,
  title,
  img,
  price,
  category,
}: IProducts) {
  return (
    <div>
      {id}
      {title}
      {img}
      {price}
      {category}
    </div>
  );
}
