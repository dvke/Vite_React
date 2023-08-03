import { useState } from "react";

export default function Button() {
  const colors: readonly string[] = [
    "primary",
    "secondary",
    "success",
    "dark",
    "warning",
    "info",
    "light",
    "danger",
  ];

  const [color, setColor] = useState<string>("primary");

  const handleClick = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      Change color
    </button>
  );
}
