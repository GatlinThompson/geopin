"use client";
import { OffCanvasSide } from "./off_canvas";
import { X } from "lucide-react";

type OffCanvasButtonProps = {
  onClick: () => void;
  side?: OffCanvasSide;
};

export default function OffCanvasButton({
  onClick,
  side = "left",
}: OffCanvasButtonProps) {
  return (
    <div className={`flex justify-${side === "left" ? "end" : "start"} mb-3`}>
      <button onClick={onClick} type="button">
        <X className="text-black" size={32} />
      </button>
    </div>
  );
}
