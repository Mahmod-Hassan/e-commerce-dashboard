import { useQuery } from "@tanstack/react-query";

const AllProducts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`An error occurred: ${error.message}`);
      }
    },
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return <div className="grid grid-cols-3 gap-5"></div>;
};

export default AllProducts;
