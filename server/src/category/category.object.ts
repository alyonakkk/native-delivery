import { Prisma } from '@prisma/client';

export const CategoryObject: Prisma.CategorySelect = {
  id: true,
  name: true,
  slug: true,
  photo: true
};
