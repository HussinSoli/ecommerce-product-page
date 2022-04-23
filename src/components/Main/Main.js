import React from "react";
import Product from "./Product";
import Slider from "../shared/Slider";
import "./main.css";
import Media from "react-media";
import SliderMobile from "../shared/silderMobile";

export default function Main({ onOpenLighbox = (f) => f }) {
  return (
    <main>
      <section>
        <Media query="(min-width: 1200px)">
          {(matches) => {
            return matches ? (
              <Slider arrows={false} onClick={onOpenLighbox} />
            ) : (
              <SliderMobile />
            );
          }}
        </Media>

        <Product />
      </section>
    </main>
  );
}
