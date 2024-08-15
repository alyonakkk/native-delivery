import { Prisma } from '@prisma/client';

import { ProductObject } from '@/product/product.object';

export const BasketProductObject: Prisma.BasketProductSelect = {
  id: true,
  quantity: true,
  product: { select: ProductObject }
};
