import React from "react";

type BackgroundContainerProps = {
  children: React.ReactNode;
  color:
    | "primary-blue"
    | "secondary-background"
    | "secondary-blue"
    | "tertiary-background";
  className?: string;
};

export default function BackgroundContainer({
  children,
  color,
  className,
}: BackgroundContainerProps) {
  return (
    <div className={`bg-${color} w-full pb-10 pt-10 ${className}`}>
      {children}
    </div>
  );
}
