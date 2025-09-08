import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant: "blue" | "black" | "outline";
  type?: "button" | "submit" | "reset";
  href?: string;
  className?: string;

  onClick?: () => void;
};
export default function Button({
  children,
  variant,
  href,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  // If href is provided, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={`${className} ${styles[`btn-${variant}`]} ${
          styles.btn
        } ${className} px-7 py-4 rounded-full font-semibold  text-md lg:text-xl `}
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
      } ${className} px-7 py-4 rounded-full font-semibold  text-md lg:text-xl `}
    >
      {children}
    </button>
  );
}
