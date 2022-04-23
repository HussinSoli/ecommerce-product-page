import React from "react";
import NavListItems from "./NavListItems";
export default function NavList() {
  const list = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <ul className="nav_list">
      {list.map((item, i) => (
        <NavListItems key={i} content={item} mobile={false} />
      ))}
    </ul>
  );
}
