import { Prisma } from '@prisma/client';

import { ProductObject } from '@/product/product.object';

export const FavoriteObject: Prisma.FavoriteProductSelect = {
  id: true,
  product: { select: ProductObject }
};
