import { db } from "@/lib/db"

export const getAllProducts = async () => {
  try {
    const products = await db.product.findMany();
    return products
  } catch (err) {
    console.log(err)
    return null
  }
}
