import { Prisma } from '@prisma/client';

import { CategoryObject } from '@/category/category.object';

export const ProductObject: Prisma.ProductSelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  photo: true,
  price: true,
  category: { select: CategoryObject }
};
