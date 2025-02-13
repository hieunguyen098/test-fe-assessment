import { Cart, CartIcon } from "@/components/Cart/Cart";
import { ProductList } from "@/components/ProductList/ProductList";

export default function Task8() {
  return (
    <div className="container mx-auto">
      <header className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Shop</h1>
        <CartIcon />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        <div className="lg:col-span-2">
          <ProductList />
        </div>
        <div className="lg:col-span-1">
          <Cart />
        </div>
      </div>
    </div>
  );
}
