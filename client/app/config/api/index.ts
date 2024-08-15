import { IAuthBody, IRefreshBody, ITokens } from '@/types/auth';
import { IAddToBasketBody, IBasket, IBasketProduct, IUpdateBasketBody } from '@/types/basket';
import { ICategory } from '@/types/category';
import { IFavoriteProduct } from '@/types/favorite';
import { IOrder, IOrderBody, IOrderPayment } from '@/types/order';
import { IProduct, IProductsParams } from '@/types/product';
import { IUserBody } from '@/types/user';

import { instance } from './instance';

export const login = async (body: IAuthBody): Promise<ITokens> => {
  const response = await instance.post(`/auth/login`, body);

  return response?.data;
};

export const signup = async (body: IAuthBody): Promise<null> => {
  const { data } = await instance.post(`/auth/sign-up`, body);

  return data;
};

export const refresh = async (body: IRefreshBody): Promise<ITokens> => {
  const { data } = await instance.post(`/auth/refresh`, body);

  return data;
};

export const updatePersonalData = async (body: IUserBody): Promise<null> => {
  const { data } = await instance.patch(`/user/profile`, body);

  return data;
};

export const getBasket = async (): Promise<IBasket> => {
  const { data } = await instance.get(`/basket`);

  return data;
};

export const resetBasket = async (id: number): Promise<null> => {
  const { data } = await instance.patch(`/basket/${id}/reset`);

  return data;
};

export const addProductToBasket = async (body: IAddToBasketBody): Promise<IBasketProduct> => {
  const { data } = await instance.post(`/basket`, body);

  return data;
};

export const updateBasketProduct = async ({
  basketProductId,
  quantity
}: IUpdateBasketBody): Promise<IBasketProduct> => {
  const { data } = await instance.patch(`/basket/${basketProductId}`, { quantity });

  return data;
};

export const removeProductFromBasket = async (basketProductId: number): Promise<null> => {
  const { data } = await instance.delete(`/basket/${basketProductId}`);

  return data;
};

export const getFavoriteProducts = async (): Promise<IFavoriteProduct[]> => {
  const { data } = await instance.get(`/favorites`);

  return data;
};

export const addFavoriteProduct = async (productId: number): Promise<IFavoriteProduct> => {
  const { data } = await instance.post(`/favorites`, { productId });

  return data;
};

export const removeFavoriteProduct = async (productId: number): Promise<null> => {
  const { data } = await instance.delete(`/favorites/${productId}`);

  return data;
};

export const getProducts = async (params?: IProductsParams): Promise<IProduct[]> => {
  const { data } = await instance.get(`/products`, { params });

  return data;
};

export const getProductBySlug = async (slug: string): Promise<IProduct> => {
  const { data } = await instance.get(`/products/${slug}`);

  return data;
};

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await instance.get(`/categories`);

  return data;
};

export const getCategoryBySlug = async (slug: string): Promise<ICategory> => {
  const { data } = await instance.get(`/categories/${slug}`);

  return data;
};

export const getOrders = async (): Promise<IOrder[]> => {
  const { data } = await instance.get(`/orders`);

  return data;
};

export const createOrder = async (body: IOrderBody): Promise<IOrderPayment> => {
  const { data } = await instance.post(`/orders`, body);

  return data;
};

export const payOrder = async (id: number): Promise<null> => {
  const { data } = await instance.patch(`/orders/${id}/paid`);

  return data;
};
