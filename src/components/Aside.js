import React from "react";
import imgClose from "../images/icon-close.svg";

export default function Aside({ hidden, onClose = (f) => f, style }) {
  const list = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className={`mobile_nav ${hidden ? "hidden" : ""}`} style={style}>
      <ul className="mobile_list">
        <img src={imgClose} alt="" onClick={() => onClose()} />
        {list.map((item, i) => (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="overlay"></div>
    </div>
  );
}
