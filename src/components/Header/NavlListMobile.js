import React from "react";
import dropDownImg from "../../images/icon-menu.svg";
export default function NavListMobile({ onClick = (f) => f }) {
  return (
    <img
      src={dropDownImg}
      alt=""
      onClick={() => onClick()}
      className="dropdown_img"
    />
  );
}
