"use client";

import { Container, Text } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { removeFromCart, addToCart } from "@/store/slices/cartslice";

const Page = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  return (
    <main className="py-16 px-4 bg-[#F7F3ED] min-h-screen">
      <Container>
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#702E1C] mb-10">
          Shopping Bag
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Products */}
          <div className="flex-1 space-y-10">
            {items.length === 0 && (
              <p className="text-gray-500">Your cart is empty</p>
            )}

            {items.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={140}
                  className="rounded-md object-cover"
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <span className="text-[#702E1C] font-medium">
                      ${Number(item.price).toFixed(2)}
                    </span>
                  </div>

                  <Text className="text-sm text-gray-600 mt-2">
                    {item.description.slice(0, 120)}...
                  </Text>

                  {/* Quantity + Remove */}
                  <div className="flex items-center gap-4 mt-4">
                    {/* Quantity controls */}
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">{item.quantity}</span>

                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-xs text-gray-500 uppercase hover:text-black"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Summary */}
          <div className="w-full lg:w-[320px] bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-6 text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <hr className="mb-6" />

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span className="text-[#702E1C]">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#702E1C] text-white py-3 rounded-md hover:bg-[#7c3825]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
