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

export const getProductDetails = async (productId: string) => {
  try {
    const product = await db.product.findUnique({
      where: { id: productId }
    })
    return product
  } catch (err) {
    console.log(err);
    return null
  }
}
