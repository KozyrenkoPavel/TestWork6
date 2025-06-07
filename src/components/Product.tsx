import { IProducts } from "../interface/interface";

export default function Product({
  id,
  title,
  images,
  price,
  category,
}: IProducts) {
  const img: string | undefined = images[0];

  return (
    <div>
      {/* <img src={images[0]}></img> */}
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>{price}$</h4>
    </div>
  );
}
