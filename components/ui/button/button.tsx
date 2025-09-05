import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant: "blue" | "black" | "outline";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
};
export default function Button({
  children,
  variant,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  // If href is provided, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles[`btn-${variant}`]} ${
          styles.btn
        } px-7 py-4 rounded-full font-semibold  text-md lg:text-xl`}
      >
        {children}
      </Link>
    );
  }

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
