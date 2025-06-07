interface IProductsBasic {
  id: number;
  title: string;
  images: string[];
  price: number;
  category: string;
}

export interface IProducts extends IProductsBasic {
  [key: string]: any;
}
