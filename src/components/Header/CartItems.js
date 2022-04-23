import React from "react";
import MainButton from "../shared/MainButton";
import CartItemContent from "./CartItemContent";
import { useProduct } from "../data-context-hook";

export default function CartItems({ hidden }) {
  const { empty } = useProduct();

  return (
    <div className={`cart_items ${hidden ? "hidden" : ""}`}>
      <h1>Cart</h1>
      <div className="cart_list">
        {empty ? (
          <div className="empty_cart">Your Cart is empty.</div>
        ) : (
          <>
            <CartItemContent />
            <MainButton content="Checkout" />
          </>
        )}
      </div>
    </div>
  );
}
