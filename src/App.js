import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Aside from "./components/Aside";
import Main from "./components/Main/Main";
import LightBox from "./components/Main/LightBox";

function App() {
  const [hidden, setHidden] = useState(true);
  const [hiddenCart, setHiddenCart] = useState(true);
  const [hiddenLightBox, setHiddenLightBox] = useState(true);

  const toggleClose = () => {
    setHidden(true);
  };
  const toggleOpen = () => {
    setHidden(false);
  };

  const toggleCart = () => {
    setHiddenCart(!hiddenCart);
  };
  const toggleCloseBox = () => {
    setHiddenLightBox(true);
  };
  const toggleOpenBox = () => {
    setHiddenLightBox(false);
  };

  return (
    <>
      <Aside hidden={hidden} onClose={() => toggleClose()} />
      <Header
        hidden={hiddenCart}
        onToggleCart={() => toggleCart()}
        onToggle={() => toggleOpen()}
      />
      <Main onOpenLighbox={() => toggleOpenBox()} />
      <LightBox
        hidden={hiddenLightBox}
        onCloseLighbox={() => toggleCloseBox()}
      />
    </>
  );
}

export default App;
