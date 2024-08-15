import { IProduct } from '@/types/product';

export enum FAVORITE_API_KEY {
  list = 'favorites-list'
}

export interface IFavoriteBody {
  productId: number;
}

export interface IFavoriteProduct {
  id: number;
  product: IProduct;
}
