//import svg from public folder
import Globe from "@/public/globe.svg";

import {
  MapPinHouse,
  NotebookPen,
  MapPinPlus,
  NotebookText,
  RotateCcw,
  HousePlus,
  CardSim,
  FileText,
} from "lucide-react";

//export icons as an object
export const icons = {
  globe: Globe,
  "map-pin-house": MapPinHouse,
  "notebook-pen": NotebookPen,
  "map-pin-plus": MapPinPlus,
  "notebook-text": NotebookText,
  "rotate-ccw": RotateCcw,
  "house-plus": HousePlus,
  "card-sim": CardSim,
  "file-text": FileText,
} as const;

//export icon names by keys of icons
export type IconName = keyof typeof icons;

//export icon sizes
export type iconSizes = 16 | 24 | 32 | 48;
