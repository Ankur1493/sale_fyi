import { db } from "@/lib/db"

export const getUserPurchases = async (id: string) => {
  try {
    const purchses = await db.purchase.findMany({ where: { userId: id } });

    return purchses;
  } catch {
    return null;
  }
}
