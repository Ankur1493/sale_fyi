import { db } from "@/lib/db"

export const getUserPurchases = async (id: string) => {
  try {
    const purchases = await db.purchase.findMany({
      where: { userId: id },
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return purchases;
  } catch (error) {
    console.error(error);
    return null;
  }
};

