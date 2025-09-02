import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant: "blue" | "black" | "outline";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
export default function Button({
  children,
  variant,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[`btn-${variant}`]} ${
        styles.btn
      } px-7 py-4 rounded-full font-semibold  text-md lg:text-xl`}
    >
      {children}
    </button>
  );
}
