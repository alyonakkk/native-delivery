import { ORDER_STATUSES } from '@prisma/client';

const ORDERS = [
  {
    userId: 1,
    status: ORDER_STATUSES.done,
    total: 65
  }
];

export default ORDERS;
