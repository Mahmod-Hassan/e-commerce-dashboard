import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuUploadCloud } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";
import { useAddProduct } from "../custorm-hooks/useProducts";
const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const thumbnail = URL.createObjectURL(selectedFiles[0]);
    setImageUrl(thumbnail);
  };
  // perform side effect after successfully post data
  const onSuccess = (data) => {
    if (data.id) {
      toast.success("product added successfully");
      reset();
    }
  };

  // perform side effect after encountering an error
  const onError = (error) => {
    if (error) {
      toast.error("failed to add product");
    }
  };
  const { mutate: addProduct } = useAddProduct(onSuccess, onError);
  const onSubmit = (formData) => {
    addProduct(formData);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="divide-y">
        <div className="flex justify-between items-center pb-5">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Create Product
            </h1>
            <p className="text-sm text-gray-600">
              Upload your product photo and details here.
            </p>
          </div>
          <button className="px-5 py-2 bg-blue-500 text-white" type="submit">
            Add Product
          </button>
        </div>

        <div className="grid p-4 grid-cols-12 relative">
          <h3 className="col-span-4 font-medium text-gray-700">Title</h3>
          <input
            {...register("title", { required: true })}
            className={`border placeholder-gray-900 focus:outline-none border-gray-200 p-2 col-span-8 rounded-lg ${
              errors.title ? "border-red-500 border-2" : ""
            }`}
            placeholder="Oliva"
          />
          {errors.title && (
            <MdErrorOutline
              className={`w-5 h-5 absolute top-0 right-0 text-red-500`}
            />
          )}
        </div>

        <div className="grid p-4 grid-cols-12 relative">
          <h3 className="col-span-4 font-medium text-gray-700">Price</h3>
          <input
            type="number"
            {...register("price", { required: true })}
            className={`border placeholder-gray-900 focus:outline-none border-gray-200 p-2 col-span-8 rounded-lg ${
              errors.title ? "border-red-500 border-2" : ""
            }`}
            placeholder="$ 13.5"
          />
          {errors.price && (
            <MdErrorOutline
              className={`w-5 h-5 absolute top-0 right-0 text-red-500`}
            />
          )}
        </div>

        <div className="grid p-4 grid-cols-12 relative">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <h3 className="font-medium text-gray-700"> Product Photo</h3>
            <span className="text-sm text-gray-600">
              This will display on your product
            </span>
          </div>
          <div className="flex justify-between col-span-12 md:col-span-8 gap-10">
            {/* image container  */}
            <div className="absolute top-0 right-4 md:static w-20 md:w-40 h-20 md:h-40 ">
              <img
                className="bg-white w-full h-full border rounded-lg"
                src={imageUrl}
                title="Empty"
                alt=""
              />
            </div>

            {/* upload image container */}
            <div className="h-32 md:h-40 w-full md:w-auto grow">
              <label
                htmlFor="file"
                className={`cursor-pointer border placeholder-gray-900 border-gray-200 h-full bg-white flex flex-col items-center justify-center px-4 py-2 rounded-lg`}
              >
                <LuUploadCloud className="w-10 h-10" />
                <div>
                  <p>
                    <span className="text-blue-500 font-medium">
                      Click to upload
                    </span>
                    &nbsp; or drag and drop <br />
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </label>
              <input
                onChange={(e) => {
                  handleFileChange(e);
                  register("image");
                }}
                type="file"
                id="file"
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="grid p-4 grid-cols-12 relative">
          <div className="col-span-4">
            <h3 className="font-medium text-gray-700">Description</h3>
            <span className="text-sm text-gray-600">
              Write a short description
            </span>
          </div>
          <textarea
            rows={5}
            {...register("description", { required: true })}
            className={`border placeholder-gray-500 focus:outline-none border-gray-200 p-2 col-span-8 rounded-lg ${
              errors.description ? "border-red-500 border-2" : ""
            }`}
            placeholder="Write something about your products..."
          />
          {errors.description && (
            <MdErrorOutline
              className={`w-5 h-5 absolute top-0 right-0 text-red-500`}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
