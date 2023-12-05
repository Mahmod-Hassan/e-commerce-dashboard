import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

// get product
const fetchAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status !== 200) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error in fetchAllProducts: ${error.message}`);
  }
};

// add product
const addProduct = async (formData) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      formData
    );
    if (response.status !== 200) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error in addProduct: ${error.message}`);
  }
};

// query for fetching all data
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

// mutation for add a product
export const useAddProduct = (onSuccess) => {
  return useMutation({
    mutationFn: addProduct,
    onSuccess,
  });
};
