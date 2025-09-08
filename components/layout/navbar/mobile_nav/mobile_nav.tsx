"use client";

import OffCanvas from "@/components/ui/off_canvas/off_canvas";
import ToggleButton from "../toggle_button/toggle_button";
import { useState, useEffect } from "react";

type MobileNavProps = {
  children?: React.ReactNode;
};
export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  //Handle resize, close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
      {isOpen && (
        <>
          <OffCanvas
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="block lg:hidden"
          >
            <nav role="navigation">{children}</nav>
          </OffCanvas>
        </>
      )}
    </>
  );
}
