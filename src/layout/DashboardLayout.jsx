import { useContext } from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import Modal from "../components/Modal";
import { StateContext } from "../context/StateProvider";

const DashboardLayout = () => {
  const { modalOpen, product } = useContext(StateContext);
  return (
    <div className="">
      <div className={`grid grid-cols-12 ${modalOpen ? "blur-md" : ""}`}>
        <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-white  sticky top-0 z-20 p-5 md:h-screen">
          <LeftSideBar />
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-5">
          <Outlet />
        </div>
      </div>
      {modalOpen && <Modal product={product} />}
    </div>
  );
};

export default DashboardLayout;
