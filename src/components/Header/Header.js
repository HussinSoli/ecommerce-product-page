import React from "react";
import NavBar from "./NavBar";
import User from "./User";
import "./header.css";

export default function Header({
  onToggleCart = (f) => f,
  onToggle = (f) => f,
  hidden,
}) {
  return (
    <header>
      <NavBar onToggle={onToggle} />
      <User onClose={onToggleCart} hidden={hidden} />
    </header>
  );
}
