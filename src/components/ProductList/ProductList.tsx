"use client";
import { useDispatch } from "react-redux";
import { addItem, CartItem } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Mechanical Keyboard", price: 129.99 },
    { id: 2, name: "Wireless Mouse", price: 59.99 },
    { id: 3, name: "USB-C Hub", price: 39.99 },
    { id: 4, name: "Monitor Stand", price: 79.99 },
  ];

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    dispatch(addItem(product));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${product.price}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button onClick={() => handleAddToCart(product)} className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
