import { useForm } from "react-hook-form";
import { LuUploadCloud } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
          <div className="absolute top-0 right-4 md:static md:col-span-3 h-20 md:h-[179px]">
            <img
              className="p-5 bg-white h-full border"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>

          <div className="col-span-12 md:col-span-5 lg:h-[179px]">
            <label
              htmlFor="file"
              className={`cursor-pointer border placeholder-gray-900 border-gray-200 h-full bg-white flex flex-col items-center justify-center px-4 py-2 rounded-lg ${
                errors.title ? "border-red-500 border-2" : ""
              }`}
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
              {...register("image", { required: true })}
              type="file"
              id="file"
              className="hidden"
            />
            {errors.image && (
              <MdErrorOutline
                className={`w-5 h-5 absolute top-0 right-0 text-red-500`}
              />
            )}
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
              errors.title ? "border-red-500 border-2" : ""
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
