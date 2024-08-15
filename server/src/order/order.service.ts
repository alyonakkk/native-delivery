import { Injectable } from '@nestjs/common';
import { ORDER_STATUSES } from '@prisma/client';
import Stripe from 'stripe';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrderObject } from './order.object';

@Injectable()
export class OrderService {
  private stripe: Stripe;

  constructor(private prismaService: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET);
  }

  async create(userId: number, { products }: CreateOrderDto) {
    const totalPrice = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    const totalCents = Math.round(totalPrice * 100);
    const order = await this.prismaService.order.create({
      data: {
        userId,
        status: ORDER_STATUSES.created,
        total: totalPrice,
        products: {
          create: products.map(({ id, price, quantity }) => ({ productId: id, price, quantity }))
        }
      }
    });
    const payment = await this.stripe.paymentIntents.create({
      amount: totalCents,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      description: `Order #${order.id}`
    });

    return { id: order.id, paymentIntent: payment.client_secret };
  }

  async findAll(userId: number) {
    return await this.prismaService.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: OrderObject
    });
  }

  async findOne(id: number) {
    return await this.prismaService.order.findUnique({
      where: { id },
      select: OrderObject
    });
  }

  async paid(id: number) {
    await this.prismaService.order.update({ where: { id }, data: { status: ORDER_STATUSES.paid } });

    return null;
  }
}
