"use client";

import React from "react";

import { Menu } from "lucide-react";

type toggle_button_props = {
  onClick: () => void;
  isOpen: boolean;
};

export default function ToggleButton({ onClick, isOpen }: toggle_button_props) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        aria-label="toggle mobile menu"
        value={"Toggle Mobile Menu Button"}
        aria-expanded={isOpen}
        title="Toggle Mobile Menu"
        role="button"
      >
        <Menu className="text-black" size={32} />
      </button>
    </>
  );
}
