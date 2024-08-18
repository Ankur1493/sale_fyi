"use server"

import { db } from "@/lib/db";
import { CartItem } from "@/store/cartStore";

export const createOrder = async (items: CartItem[], userId: string, totalPrice: number) => {
  try {
    console.log("started")
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(`User with id ${userId} does not exist`);
    }

    const order = await db.purchase.create({
      data: {
        userId,
        createdAt: new Date(),
        totalPrice,
        products: {
          create: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
      },
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    return order;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
};

