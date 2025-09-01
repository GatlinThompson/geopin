import Banner from "../banner/banner";
import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <header className="w-full">
      <Banner />
      <Navbar />
    </header>
  );
}
