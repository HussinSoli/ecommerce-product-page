import React from "react";
export default function NavListItems({ content, mobile = true }) {
  return (
    <li className={`nav_item ${mobile ? "mobile_item" : ""}`}>
      <a href="#">{content}</a>
    </li>
  );
}
