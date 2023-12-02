import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <aside>
      <ul className="flex md:flex-col gap-5">
        <li className="bg-gray-100 hover:bg-black hover:text-white rounded text-gray-700 hover:cursor-pointer">
          <Link className="w-full h-full p-2 block" to="/">
            Products
          </Link>
        </li>
        <li className="bg-gray-100 hover:bg-black hover:text-white rounded text-gray-700 hover:cursor-pointer">
          <Link className="w-full h-full p-2 block" to="/add-product">
            Add product
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSideBar;
