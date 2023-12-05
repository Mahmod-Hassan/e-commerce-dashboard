import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

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

// delete product
const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (response.status !== 200) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error in deleting product: ${error.message}`);
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
export const useAddProduct = (navigate) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(["products"], (products) => {
        const updatedProducts = [...products, data];
        return updatedProducts;
      });
    },
    onError: (error) => {
      toast.error(`Failed to add product: ${error.message}`);
    },
  });
};

// mutation for delete a product
export const useDeleteProduct = (setIsDeleting, modalOpen) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      toast.success(`${data.title} is deleted`);
      queryClient.setQueryData(["products"], (products) => {
        const remainingProducts = products.filter(
          (product) => product?.id !== data?.id
        );
        setIsDeleting(false);
        modalOpen(false);
        return remainingProducts;
      });
    },
    onError: (error) => {
      setIsDeleting(false);
      toast.error(`Failed to delete product: ${error.message}`);
    },
  });
};
