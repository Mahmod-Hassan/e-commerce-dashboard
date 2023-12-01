import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-white p-5">
        <LeftSideBar />
      </div>
      <div className="col-span-12 md:col-span-9 col-span-10 p-5 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
