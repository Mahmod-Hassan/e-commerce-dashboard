import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllProducts";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <div className="bg-gray-100">
      <Toaster />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<AllProducts />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
