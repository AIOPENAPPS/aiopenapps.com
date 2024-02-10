import React from "react";
import "../App.css";

export default function Category({ name, handleClick, isActive }) {
  const handleClickCategory = () => {
    handleClick(name);
  };
  return (
    <button
      onClick={handleClickCategory}
      className={`btn ${
        isActive ? "active" : ""
      } `}
    >
      {name}
    </button>
  );
}
