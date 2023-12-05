import { useContext, useState } from "react";
import { StateContext } from "../context/StateProvider";
import { useDeleteProduct } from "../custorm-hooks/useProducts";
import Loader from "./Loader";

const Modal = ({ product }) => {
  // StateContext is a context provider
  // which provide product and modal state
  const { setModalOpen } = useContext(StateContext);
  const [isDeleting, setIsDeleting] = useState(false);

  // useDeleteProduct is my custom hook
  const { mutate: deleteProductMutation } = useDeleteProduct(
    setIsDeleting,
    setModalOpen
  );

  // showing a loader when product is deleting
  if (isDeleting) {
    return (
      <div className="flex justify-center items-center fixed z-50 inset-0">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center fixed z-50 inset-0">
      <div className="border bg-white max-w-md p-5 space-y-6">
        <div className="border-b pb-5 flex justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold">Delete Product</h3>
            <p>Are you sure want to delete {product.title}</p>
          </div>
          <img className="w-20 h-20" src={product?.image} alt="" />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-200 px-5 py-2 rounded"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            disabled={isDeleting}
            onClick={() => {
              setIsDeleting(true);
              deleteProductMutation(product?.id);
            }}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
