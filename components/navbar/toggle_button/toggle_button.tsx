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
      <button onClick={onClick} type="button">
        <Menu className="text-black" size={32} />
      </button>
    </>
  );
}
