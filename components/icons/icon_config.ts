//import svg from public folder
import Globe from "@/public/globe.svg";
import File from "@/public/file.svg";

//export icons as an object
export const icons = {
  globe: Globe,
  file: File,
} as const;

//export icon names by keys of icons
export type IconName = keyof typeof icons;

//export icon sizes
export type iconSizes = 16 | 24 | 32 | 48;
