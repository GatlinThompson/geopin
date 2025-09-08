import { IconName } from "@/components/ui/icons/icon_config";

export type ProductLink = {
  name: string;
  href: string;
  icon: IconName;
};

export type ProductsProps = {
  name: string;
  description: string;
  links?: ProductLink[];
  icon_color: string;
  image: string;
};

const products: ProductsProps[] = [
  {
    name: "Address Validation",
    description: `Achieve rapid address validation and standardization for over 250 
    countries and territories worldwide with unmatched processing speed.`,
    links: [
      { name: "US Address Validation", href: "#", icon: "file" },
      { name: "International Address Validation", href: "#", icon: "file" },
    ],
    image: "/city_blocks/mobile-city.png",
    icon_color: "bright-pink",
  },
  {
    name: "Address Autocomplete",
    description: `Capture the speed and accuracy of address entry with our 
    address autocomplete solution.`,
    links: [
      { name: "US Address Autocomplete", href: "#", icon: "file" },
      { name: "International Address Autocomplete", href: "#", icon: "file" },
    ],
    image: "/city_blocks/mobile-city.png",
    icon_color: "dark-purple",
  },
  {
    name: "Geocoding",
    description: `Convert addresses into precise latitude and longitude coordinates. 
    Geopin's geocoding solution provides accurate and reliable results.`,
    links: [
      { name: "US Rooftop Geocoding", href: "#", icon: "file" },
      { name: "Us Reverse Geocoding", href: "#", icon: "file" },
    ],
    image: "/city_blocks/mobile-city.png",
    icon_color: "bright-orange",
  },
  {
    name: "Address Enrichment",
    description: `Access over 100+ data points for any address, including demographics, 
    property details, and more.`,
    links: [
      { name: "US Propery Data", href: "#", icon: "file" },
      { name: "Us GeoReference Data", href: "#", icon: "file" },
      { name: "US Secondary Address Data", href: "#", icon: "file" },
    ],
    image: "/city_blocks/mobile-city.png",
    icon_color: "lime-green",
  },
];

export default products;
