import { useGetProducts } from "../custorm-hooks/useProducts";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const { data: products, isLoading, isError, error } = useGetProducts();
  // console.log(products);
  // console.log({ isLoading, isError, error, products });
  let content = null;
  if (isLoading && !isError) {
    content = <Loader />;
  }
  if (isError && !isLoading) {
    content = <div className="text-red-700">Error: {error?.message}</div>;
  }
  if (!isError && !isLoading && products?.length > 0) {
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
