import React, { useContext } from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { StateContext } from "../context/StateProvider";
const ProductCard = ({ product }) => {
  // import setModalOpen from StateContext
  const { modalOpen, setModalOpen, setProduct } = useContext(StateContext);
  // destructuring from product
  const { price, image, rating, description } = product;

  // const handleDelete = (productId) => {
  //   Swal.fire({
  //     title: "Delete Product",
  //     text: `Are you sure want to delete ${title}`,
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       alert(productId);
  //     }
  //   });
  // };
  // create a array variable
  // so that I can store star icon based on rating.rate
  const ratingStars = [];
  for (let i = 0; i < Math.round(rating.rate); i++) {
    ratingStars.push(<IoIosStar key={i} />);
  }
  const splitDescription = description.split(" ");
  return (
    <div className="border rounded flex flex-col">
      <div className="w-full bg-white p-5 rounded">
        <img className="w-[163px] h-[214px] mx-auto" src={image} alt="" />
      </div>
      <div className="border-t p-5 h-auto bg-gray-200 grow">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">$ {price}</p>
          <button
            onClick={() => {
              setModalOpen(true);
              setProduct(product);
            }}
            className="border p-2 text-red-500 bg-white hover:bg-red-200"
          >
            <FaTrashCanArrowUp />
          </button>
        </div>
        <p className="text-[#FF9017] flex">{ratingStars}</p>
        <p className="">
          {splitDescription.slice(0, 5).join(" ")}{" "}
          <span className="text-blue-500">read more...</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
