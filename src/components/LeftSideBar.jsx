import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div>
      <ul className="flex md:flex-col gap-5">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add-product">Add product</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
