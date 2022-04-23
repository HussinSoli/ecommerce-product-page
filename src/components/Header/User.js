import React from "react";
import Cart from "./Cart";
import { useProduct } from "../data-context-hook";
import userImg from "../../images/image-avatar.png";
export default function User({ onClose = (f) => f, hidden }) {
  const { num } = useProduct();
  return (
    <div className="user">
      <img src={userImg} alt="" className="user_img" />
      <Cart onClick={onClose} hidden={hidden} itemsCount={num} />
    </div>
  );
}
