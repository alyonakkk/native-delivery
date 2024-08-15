import { ReactNode } from 'react';

export enum ROUTES {
  auth = 'auth',
  home = 'home',
  favorites = 'favorites',
  search = 'search',
  basket = 'basket',
  explorer = 'explorer',
  category = 'category',
  product = 'product',
  profile = 'profile',
  success = 'success',
  orders = 'orders',
  personalData = 'personalData'
}

export type TRoutes = {
  auth: undefined;
  home: undefined;
  favorites: undefined;
  search: undefined;
  explorer: undefined;
  profile: undefined;
  basket: undefined;
  success: undefined;
  orders: undefined;
  personalData: undefined;
  category: {
    slug: string;
  };
  product: {
    slug: string;
  };
};

export interface IRoute {
  name: ROUTES;
  component: ReactNode;
  isPrivate: boolean;
}

export interface INavigationContext {
  currentRoute?: string;
}
