import React, { useState, createContext, useContext } from "react";
import data from ".././data.json";

const ProductContext = createContext(data);
export const useProduct = () => useContext(ProductContext);

export default function ProductProvider({ children }) {
  const [{ compney }] = useState(data);
  const [empty, setEmpty] = useState(true);
  const [num, setNum] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItems = (num, sale = 0.5) => {
    const productPrice = compney.products.price;
    setNum(num);
    setPrice(productPrice * sale);
    setTotalPrice(productPrice * sale * num);
    if (num === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const removeItems = () => {
    setNum(0);
    setEmpty(true);
  };

  return (
    <ProductContext.Provider
      value={{ empty, compney, num, price, totalPrice, addItems, removeItems }}
    >
      {children}
    </ProductContext.Provider>
  );
}
