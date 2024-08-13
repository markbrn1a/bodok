"use client";
import { useState } from "react";
export default function Tooltip({ index, tooltip }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <div
      key={index}
      className={
        isActive.key == index + 1
          ? "tooltip-item top active"
          : "tooltip-item top"
      }
      onClick={() => handleToggle(index + 1)}
    >
      <div className="tooltip-btn pulse">
        <i className="fas fa-plus" />
      </div>
      <div className="tooltip-content">
        <h2 className="title">{tooltip.title}</h2>
        <p>{tooltip.description}</p>
      </div>
    </div>
  );
}
