import Banner from "../../ui/banner/banner";
import Navbar from "../navbar/navbar";
import StickyHeader from "./sticky_header/sticky_header";

export default function Header() {
  return (
    <StickyHeader>
      <Banner />
      <Navbar />
    </StickyHeader>
  );
}
