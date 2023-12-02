import React from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
const ProductCard = ({ product }) => {
  const { price, image, rating, description } = product;
  //
  const ratingStars = [];
  for (let i = 0; i < Math.round(rating.rate); i++) {
    ratingStars.push(<IoIosStar />);
  }
  const splitDescription = description.split(" ");
  return (
    <div className="border rounded">
      <div className="w-full bg-white p-5 rounded">
        <img className="w-[163px] h-[214px] mx-auto" src={image} alt="" />
      </div>
      <div className="border-t p-5 bg-gray-100/75%">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">$ {price}</p>
          <button className="border p-2 text-red-500">
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
