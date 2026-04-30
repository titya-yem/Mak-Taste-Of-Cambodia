import fetchApi from "@/hooks/useFetch";
import { ProductTypes } from "@/types/productTypes";
import ProductsList from "./ProductList";

const Products = async () => {
  const result = await fetchApi<ProductTypes[]>("/product");
  const data = result?.data ?? [];

  return <ProductsList data={data} />;
};

export default Products;