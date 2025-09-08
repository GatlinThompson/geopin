import { icons, IconName, iconSizes } from "./icon_config";

type IconProps = {
  icon: IconName;
  size: iconSizes;
  color?: string;
};

export default function Icon({
  icon,
  size = 24,

  color,
}: IconProps) {
  const Svg = icons[icon];

  //set color with tailwind
  const colorString = `!text-${color}`;

  return (
    <>
      <Svg width={size} height={size} className={colorString} />
    </>
  );
}
