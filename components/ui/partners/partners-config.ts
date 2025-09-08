//Import partner logos from public folder
import Disney from "@/public/partners/disney.png";
import Hulu from "@/public/partners/hulu.png";
import Lyft from "@/public/partners/lyft.png";
import Netflix from "@/public/partners/netflix.png";
import Spotify from "@/public/partners/spotify.png";

import Nexa from "@/public/partners/nexa.png";
import CapitalOne from "@/public/partners/capital-one.png";
import Nasa from "@/public/partners/nasa.png";

const partners = [
  { name: "Hulu", logo: Hulu },
  { name: "Lyft", logo: Lyft },
  { name: "Spotify", logo: Spotify },
  { name: "Disney", logo: Disney },
  { name: "Netflix", logo: Netflix },
  { name: "Nexa", logo: Nexa },
  { name: "Capital One", logo: CapitalOne },
  { name: "Nasa", logo: Nasa },
];

export type PartnerName = (typeof partners)[number]["name"];

export default partners;
