import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const state = {
    modalOpen,
    setModalOpen,
    product,
    setProduct,
    products,
    setProducts,
  };
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
