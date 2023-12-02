import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  // fetch products using tanstaq query
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`failed to fetch: ${error.message}`);
      }
    },
  });

  // create a variable initial property with null
  // It can change based on isLoading, isError and products
  let content = null;

  if (isLoading && !isError) {
    return (content = <div>Loading...</div>);
  }

  if (isError && !isLoading && products.length < 1) {
    return <span>Error: {error.message}</span>;
  }
  if (!isError && !isLoading && products.length > 0) {
    content = products.map((product) => (
      <ProductCard key={product?.id} product={product} />
    ));
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* content variable set here */}
        {content}
      </div>
    </div>
  );
};

export default AllProducts;
