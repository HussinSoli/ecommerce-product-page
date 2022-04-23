import React from "react";
import Slider from "../shared/Slider";
import { FaTimes } from "react-icons/fa";
export default function LightBox({ hidden, onCloseLighbox = (f) => f }) {
  return (
    <div className={`lightbox ${hidden ? "hidden" : ""}`}>
      <div className="close-lightbox" onClick={() => onCloseLighbox()}>
        <FaTimes />
      </div>
      <Slider />
      <div className="overlay"></div>
    </div>
  );
}
