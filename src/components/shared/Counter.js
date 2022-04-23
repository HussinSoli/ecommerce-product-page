import React, { useState } from "react";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import { useProduct } from "../data-context-hook";
import MainButton from "./MainButton";
import imgCart from "../../images/icon-cart-copy.svg";
export default function Counter() {
  const { addItems, num } = useProduct();
  const [counter, setCounter] = useState(num);

  return (
    <>
      <div className="counter">
        <button className="decrease" onClick={() => setCounter(counter - 1)}>
          <img src={minus} alt="-" />
        </button>
        {counter >= 0 ? (
          <p className="number">{counter}</p>
        ) : (
          <p>Cant be below zero</p>
        )}
        <button className="increase" onClick={() => setCounter(counter + 1)}>
          <img src={plus} alt="+" />
        </button>
      </div>
      <MainButton
        content="Add to cart"
        img={imgCart}
        onClick={() => {
          addItems(counter);
        }}
      />
    </>
  );
}
