import { Prisma } from '@prisma/client';

export const UserObject: Prisma.UserSelect = {
  id: true,
  name: true,
  email: true,
  photo: true,
  hash: true,
  salt: true
};
