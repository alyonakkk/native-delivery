import { ICategory } from '@/types/category';

export enum PRODUCT_API_KEY {
  list = 'products-list',
  slug = 'product-by-slug'
}

export interface IProduct {
  id: number;
  category: ICategory;
  name: string;
  slug: string;
  description: string;
  price: number;
  isAvailable: boolean;
  photo: string;
}

export interface IProductsParams {
  value?: string;
  limit?: number;
}
