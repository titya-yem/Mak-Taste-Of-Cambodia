"use client";

import { ProductTypes } from "@/types/productTypes";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "@/store/slices/cartslice";

const ProductsList = ({ data }: { data: ProductTypes[] }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
      {data.map((p) => (
        <div key={p.id} className="w-70 md:w-75">
          <Image
            src={p.image}
            alt={p.name}
            width={290}
            height={290}
            className="mx-auto rounded-md"
          />

          <Flex align="center" justify="between">
            <h5 className="py-2 text-lg font-bold">{p.name}</h5>

            <Text className="text-sm font-bold text-[#702E1C]">
              ${p.price}
            </Text>
          </Flex>

          <Text as="p" className="text-sm pb-4 text-[#54433F]">
            {p.description.length > 120
              ? p.description.slice(0, 120) + "..."
              : p.description}
          </Text>

          <Button
            onClick={() => handleAddToCart(p)}
            className="w-full py-6 rounded-sm uppercase cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#7c3825]"
          >
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;