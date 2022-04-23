import React from "react";
import cartImg from "../../images/icon-cart.svg";

import CartItems from "./CartItems";
export default function Cart({ itemsCount = 0, onClick = (f) => f, hidden }) {
  return (
    <>
      <div className="cart">
        {itemsCount > 0 ? (
          <div className="cart_items--count">
            <p>{itemsCount}</p>
          </div>
        ) : (
          ""
        )}
        <img src={cartImg} alt="Cart" onClick={() => onClick()} />
      </div>
      <CartItems hidden={hidden} />
    </>
  );
}
