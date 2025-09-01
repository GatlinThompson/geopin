"use client";
import { useEffect, useState } from "react";
import OffCanvasButton from "./off_canvas.button";

type OffCanvasProps = {
  children: React.ReactNode;
  isOpen: boolean;
  side?: "left" | "right";
  onClose: () => void;
  className?: string;
};

export default function OffCanvas({
  children,
  isOpen,
  side = "right",
  className,
  onClose,
}: OffCanvasProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShouldRender(true);
      setTimeout(() => setVisible(true), 10);
    } else {
      document.body.style.overflow = "auto";
      const timeout = setTimeout(() => setShouldRender(false), 10);
      return () => clearTimeout(timeout);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  //Close off canvas for transitions
  const closeOffCanvas = () => {
    setVisible(false);
    const timeout = setTimeout(() => {
      onClose();
    }, 300);

    return () => clearTimeout(timeout);
  };

  //Don't render if not opened
  if (!shouldRender) return null;

  return (
    <div
      id="off-canvas"
      className={`h-screen w-screen overflow-hidden fixed top-0 left-0 z-150 ${className}`}
    >
      <div
        className={`h-screen w-screen bg-black fixed top-0 left-0 z-40 transition-opacity duration-300 linear ${
          visible ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeOffCanvas}
      />
      <div
        className={`absolute top-0 ${
          side === "left" ? "left-0" : "right-0"
        } h-screen w-4/5 bg-white transform transition-transform duration-300 ease-in-out z-50 p-4 max-w-[320px] ${
          isOpen && visible
            ? "translate-x-0"
            : side === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <OffCanvasButton onClick={closeOffCanvas} side={side} />
        <div className="flex flex-col h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export type OffCanvasSide = OffCanvasProps["side"];
