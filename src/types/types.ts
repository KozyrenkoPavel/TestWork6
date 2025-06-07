import { IProducts } from "../interface/interface";

export type TRequest = {
  limit: number;
  products: IProducts[];
  skip: number;
  total: number;
};
