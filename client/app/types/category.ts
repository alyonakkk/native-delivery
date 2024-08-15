import { IProduct } from '@/types/product';

export enum CATEGORY_API_KEY {
  list = 'categories-list',
  slug = 'category-by-slug'
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  photo: string;
  products?: IProduct[];
}
