import { Prisma } from '@prisma/client';

import { ProductObject } from '@/product/product.object';

export const OrderProductObject: Prisma.OrderProductSelect = {
  id: true,
  price: true,
  quantity: true,
  product: { select: ProductObject }
};

export const OrderObject: Prisma.OrderSelect = {
  id: true,
  status: true,
  total: true,
  products: { select: OrderProductObject },
  createdAt: true
};
