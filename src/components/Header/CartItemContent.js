import React from "react";
import test from "../../images/image-product-2-thumbnail.jpg";
import imgRemove from "../../images/icon-delete.svg";
import { useProduct } from "../data-context-hook";
export default function CartItemContent() {
  const { compney, num, price, totalPrice, removeItems } = useProduct();
  const name = compney.products.name;

  return (
    <div className="item">
      <div className="item_content">
        <img src={test} alt="" className="item_img" />
        <div className="item_info">
          <p className="item_name">{name}</p>
          <p className="item_price">
            <span>${price} </span>
            <span>x {num} </span>
            <span className="total_price">${totalPrice}</span>
          </p>
        </div>
      </div>
      <img
        src={imgRemove}
        alt=""
        className="remove_item"
        onClick={() => removeItems()}
      />
    </div>
  );
}
