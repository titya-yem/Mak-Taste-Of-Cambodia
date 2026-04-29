  import fetchApi from "@/hooks/useFetch";
  import { ProductTypes } from "@/types/productTypes";
  import { Flex, Text } from "@radix-ui/themes";
  import Image from "next/image";
  import { Button } from "./ui/button";

  const Products = async () => {
    const result = await fetchApi<ProductTypes[]>("/product");
    const data = result?.data ?? [];

    return (
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
        {data.map((product) => (
          <div key={product.id} className="w-70 md:w-75">
            <Image
              src={product.image}
              alt={product.name}
              width={290}
              height={290}
              className="mx-auto rounded-md"
            />

            <Flex align="center" justify="between">
              <h5 className="py-2 text-lg font-bold">
                {product.name}
              </h5>

              <Text className="text-sm font-bold text-[#702E1C]">
                ${product.price}
              </Text>
            </Flex>

            <Text as="p" className="text-sm pb-4 text-[#54433F]">
              {product.description.length > 120
                ? product.description.slice(0, 120) + "..."
                : product.description}
            </Text>

            <Button
              variant="ghost"
              className="w-full py-6 rounded-sm uppercase cursor-pointer text-white bg-[#702E1C] hover:text-white hover:bg-[#7c3825]"
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    );
  };

  export default Products;
