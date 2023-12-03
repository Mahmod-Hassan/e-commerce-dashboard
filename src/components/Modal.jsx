import { useContext } from "react";
import toast from "react-hot-toast";
import { StateContext } from "../context/StateProvider";

const Modal = ({ product }) => {
  const { setModalOpen } = useContext(StateContext);
  const deleteProduct = async (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.title) {
          setModalOpen(false);
          toast.success(`successfully delete this ${data.title}`);
        }
      });
  };
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
            onClick={() => deleteProduct(product?.id)}
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
