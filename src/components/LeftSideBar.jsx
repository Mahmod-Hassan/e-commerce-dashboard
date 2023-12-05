import { Link, useLocation } from "react-router-dom";

const LeftSideBar = () => {
  const location = useLocation();
  const activeClass = "bg-black text-white";
  const inactiveClass = "bg-gray-100";
  return (
    <aside className="">
      <ul className="flex md:flex-col gap-5 text-center">
        <li>
          <Link
            className={`block px-5 w-full py-2 ${
              location.pathname === "/" ? activeClass : inactiveClass
            }`}
            to="/"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`block px-5 w-full py-2 ${
              location.pathname === "/add-product" ? activeClass : inactiveClass
            }`}
            to="/add-product"
          >
            Add product
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSideBar;
