import Banner from "../../banner/banner";
import Navbar from "../../navbar/navbar";
import StickyHeader from "./sticky_header/sticky_header";

export default function Header() {
  return (
    <header className="w-full mb-2">
      <StickyHeader>
        <Banner />
        <Navbar />
      </StickyHeader>
    </header>
  );
}
