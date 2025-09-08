import { icons, IconName, iconSizes } from "./icon_config";

type IconProps = {
  icon: IconName;
  size: iconSizes;
  color?: string;
};

export default function Icon({ icon, size = 24, color }: IconProps) {
  const Svg = icons[icon];

  // Map color names to actual Tailwind classes
  const colorMap: Record<string, string> = {
    "bright-pink": "!text-bright-pink",
    "dark-purple": "!text-dark-purple",
    "bright-orange": "!text-bright-orange",
    "lime-green": "!text-lime-green",
    "primary-blue": "!text-primary-blue",
    "secondary-blue": "!text-secondary-blue",
    pink: "!text-pink",
    yellow: "!text-yellow",
  };

  const colorClass = color ? colorMap[color] || `!text-${color}` : "";

  return (
    <>
      <Svg width={size} height={size} className={colorClass} />
    </>
  );
}
