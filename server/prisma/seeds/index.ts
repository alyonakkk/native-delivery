import { PrismaClient } from '@prisma/client';

import CATEGORIES from './categories';
import ORDER_PRODUCTS from './orderProducts';
import ORDERS from './orders';
import PRODUCTS from './products';
import USERS from './users';

const prisma = new PrismaClient();

async function main() {
  await prisma.$queryRawUnsafe(`Truncate "User" restart identity cascade;`);
  await prisma.user.createMany({
    data: USERS
  });

  await prisma.$queryRawUnsafe(`Truncate "Category" restart identity cascade;`);
  await prisma.category.createMany({
    data: CATEGORIES
  });

  await prisma.$queryRawUnsafe(`Truncate "Product" restart identity cascade;`);
  await prisma.product.createMany({
    data: PRODUCTS
  });

  await prisma.$queryRawUnsafe(`Truncate "Order" restart identity cascade;`);
  await prisma.order.createMany({
    data: ORDERS
  });

  await prisma.$queryRawUnsafe(`Truncate "OrderProduct" restart identity cascade;`);
  await prisma.orderProduct.createMany({
    data: ORDER_PRODUCTS
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
