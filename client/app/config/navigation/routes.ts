import { Auth } from '@/pages/auth';
import { Basket } from '@/pages/basket';
import { Category } from '@/pages/category';
import { Explorer } from '@/pages/explorer';
import { Favorites } from '@/pages/favorites';
import { Home } from '@/pages/home';
import { Orders } from '@/pages/orders';
import { PersonalData } from '@/pages/personalData';
import { Product } from '@/pages/product';
import { Profile } from '@/pages/profile';
import { Search } from '@/pages/search';
import { Success } from '@/pages/success';

import { IRoute, ROUTES } from './types';

export const ROUTER: IRoute[] = [
  {
    name: ROUTES.auth,
    component: Auth,
    isPrivate: false
  },
  {
    name: ROUTES.home,
    component: Home,
    isPrivate: true
  },
  {
    name: ROUTES.favorites,
    component: Favorites,
    isPrivate: true
  },
  {
    name: ROUTES.search,
    component: Search,
    isPrivate: true
  },
  {
    name: ROUTES.basket,
    component: Basket,
    isPrivate: true
  },
  {
    name: ROUTES.explorer,
    component: Explorer,
    isPrivate: true
  },
  {
    name: ROUTES.category,
    component: Category,
    isPrivate: true
  },
  {
    name: ROUTES.product,
    component: Product,
    isPrivate: true
  },
  {
    name: ROUTES.profile,
    component: Profile,
    isPrivate: true
  },
  {
    name: ROUTES.orders,
    component: Orders,
    isPrivate: true
  },
  {
    name: ROUTES.personalData,
    component: PersonalData,
    isPrivate: true
  },
  {
    name: ROUTES.success,
    component: Success,
    isPrivate: true
  }
];
