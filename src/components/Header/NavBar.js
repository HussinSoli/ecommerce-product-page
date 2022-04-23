import React from "react";
import Media from "react-media";
import NavList from "./NavList";
import NavListMobile from "./NavlListMobile";
import navLogo from "../../images/logo.svg";

export default function NavBar({ onToggle }) {
  return (
    <Media query="(min-width: 850px)">
      {(matches) => {
        return matches ? (
          <nav>
            <img src={navLogo} alt="" className="nav_logo" />
            <NavList />
          </nav>
        ) : (
          <nav>
            <NavListMobile onClick={onToggle} />
            <img src={navLogo} alt="" className="nav_logo" />
          </nav>
        );
      }}
    </Media>
  );
}
