import fetchApi from "@/hooks/useFetch";
import { ProductTypes } from "@/types/productTypes";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "./ui/button";

const Products = async () => {
  const response = await fetchApi<ProductTypes[]>("/product");
  const products = response.data;

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
      {products.map((product) => (
        <div key={product.id} className="w-80">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className="rounded-md"
          />

          <Flex align="center" justify="between">
            <h5 className="py-2 text-lg md:text-xl font-bold">
              {product.name}
            </h5>

            <Text className="text-sm md:text-base text-[#702E1C]">
              ${product.price}
            </Text>
          </Flex>

          <Text as="p" className="pb-4 text-[#54433F]">
            {product.description}
          </Text>

          <Button
            variant="ghost"
            className="w-full py-6 rounded-sm uppercase cursor-pointer text-white bg-[#702E1C] hover:bg-[#7c3825]"
          >
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
