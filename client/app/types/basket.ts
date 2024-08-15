import { IProduct } from '@/types/product';

export enum BASKET_API_KEY {
  list = 'basket-list'
}

export interface IBasket {
  id: number;
  products: IBasketProduct[];
}

export interface IBasketProduct {
  id: number;
  quantity: number;
  product: IProduct;
}

export interface IAddToBasketBody {
  basketId: number;
  productId: number;
}

export interface IUpdateBasketBody {
  basketProductId: number;
  quantity: number;
}
