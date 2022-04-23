import React from "react";
import { useProduct } from ".././data-context-hook";
export default function ProductPrice() {
  const { compney } = useProduct();
  const price = compney.products.price;
  return (
    <div className="product_price">
      <div className="final_price">
        <p className="final_price--p">${price * 0.5}.00</p>
        <p className="sale">50%</p>
      </div>
      <p>${price}.00</p>
    </div>
  );
}
