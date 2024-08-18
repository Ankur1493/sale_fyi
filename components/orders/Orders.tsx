import { getUserPurchases } from "@/data/purchase";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "../ui/separator";

interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
}

interface PurchaseProduct {
  id: string;
  product: Product;
  quantity: number;
}

interface Purchase {
  id: string;
  createdAt: Date;
  totalPrice?: number;
  products: PurchaseProduct[];
}

export const Orders = async ({ userId }: { userId: string }) => {
  const purchases = (await getUserPurchases(userId)) as Purchase[];

  return (
    <div className="flex w-full justify-center items-center flex-col">
      <h1 className="text-main text-xl md:text-3xl font-semibold">Your Orders</h1>
      {purchases.length === 0 ? (
        <p>You have not ordered anything from us YET</p>
      ) : (
        purchases.map((purchase) => (
          <div key={purchase.id} className="pt-4 w-full">
            <Separator className="bg-gray-400 mb-3" />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-lg sm:text-xl  font-semibold mb-4">Order ID: {purchase.id}</h2>
              <div>
                <p className="text-lg sm:text-xl font-semibold mb-4" >Created At: {purchase.createdAt.toLocaleDateString()}</p>
                <p className="text-lg sm:text-xl font-semibold mb-4" >Total Price - ${purchase.totalPrice}</p>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-[400px]">Quantity</TableHead>
                  <TableHead className="text-right">Total Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchase.products.map((purchaseProduct) => (
                  <TableRow key={purchaseProduct.id}>
                    <TableCell>
                      <Image
                        src={purchaseProduct.product.image}
                        alt={`${purchaseProduct.product.name} image`}
                        height={100}
                        width={100}
                        className="h-[50px] w-[50px] object-cover"
                      />
                    </TableCell>
                    <TableCell>{purchaseProduct.product.name}</TableCell>
                    <TableCell>{purchaseProduct.quantity}</TableCell>
                    <TableCell className="text-right">
                      ${purchaseProduct.product.price * purchaseProduct.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))
      )}
    </div>
  );
};

