import { IProduct } from '@/types/product';

export enum ORDER_API_KEY {
  list = 'orders-list',
  detail = 'order-detail'
}

export enum ORDER_STATUSES {
  created,
  done,
  canceled,
  unpaid,
  paid
}

export interface IOrderProductBody {
  id: number;
  price: number;
  quantity: number;
}

export interface IOrderBody {
  products: IOrderProductBody[];
}

export interface IOrderPayment {
  id: number;
  paymentIntent: string;
}

export interface IOrderProduct {
  id: number;
  price: number;
  quantity: number;
  product: IProduct;
}

export interface IOrder {
  id: number;
  status: ORDER_STATUSES;
  total: number;
  createdAt: string;
  products: IOrderProduct[];
}
