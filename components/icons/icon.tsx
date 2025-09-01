"use client";
import { icons, IconName, iconSizes } from "./icon_config";

type IconProps = {
  icon: IconName;
  size: iconSizes;
  className?: string;
  color?: string;
  title?: string;
};

export default function Icon({
  icon,
  size = 24,
  className,
  title,
  color,
}: IconProps) {
  const Svg = icons[icon];

  //set color with tailwind
  const colorString = `text-${color}`;

  return (
    <>
      <Svg width={size} height={size} className={colorString} />
    </>
  );
}
