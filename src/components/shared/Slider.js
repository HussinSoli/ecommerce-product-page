import React, { useState } from "react";
import mainImg1 from "../../images/image-product-1.jpg";
import mainImg2 from "../../images/image-product-2.jpg";
import mainImg3 from "../../images/image-product-3.jpg";
import mainImg4 from "../../images/image-product-4.jpg";
import img1 from "../../images/image-product-1-thumbnail.jpg";
import img2 from "../../images/image-product-2-thumbnail.jpg";
import img3 from "../../images/image-product-3-thumbnail.jpg";
import img4 from "../../images/image-product-4-thumbnail.jpg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./slider.css";

export default function Slider({ arrows = true, onClick = (f) => f }) {
  const sliderList = [mainImg1, mainImg2, mainImg3, mainImg4];
  const imgList = [img1, img2, img3, img4];
  const [slide, setSlide] = useState(1);

  const nextImg = () => {
    slide < sliderList.length ? setSlide(slide + 1) : setSlide(1);
  };
  const previousImg = () => {
    slide <= sliderList.length && slide !== 1
      ? setSlide(slide - 1)
      : setSlide(4);
  };

  return (
    <div className="slider">
      <div className="main_img" onClick={() => onClick()}>
        {arrows ? (
          <button className="left" onClick={() => previousImg()}>
            <FaAngleLeft />
          </button>
        ) : (
          ""
        )}
        <img src={sliderList[slide - 1]} alt="" />
        {arrows ? (
          <button className="right" onClick={() => nextImg()}>
            <FaAngleRight />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="slider_imgs">
        {imgList.map((img, i) => {
          return (
            <img
              src={img}
              alt=""
              key={i}
              className={slide === imgList.indexOf(img) + 1 ? "img_foucs " : ""}
              onClick={() => setSlide(imgList.indexOf(img) + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}
