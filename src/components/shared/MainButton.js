import React from "react";
import "./btn.css";
export default function MainButton({ content, img, onClick = (f) => f }) {
  return (
    <button className="btn" onClick={() => onClick()}>
      <img src={img} alt="" />
      {content}
    </button>
  );
}
