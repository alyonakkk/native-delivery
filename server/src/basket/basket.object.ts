import { Prisma } from '@prisma/client';

import { BasketProductObject } from './basketProduct.object';

export const BasketObject: Prisma.BasketSelect = {
  id: true,
  products: { select: BasketProductObject }
};
