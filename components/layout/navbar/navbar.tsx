import Link from "next/link";
import Nav from "./nav/nav";

export default function Navbar() {
  return (
    <div className="flex flex-wrap row justify-start items-center px-3 py-3 gap-4 max-w-[var(--max-width)] mx-auto w-full lg:px-10">
      <div className="flex justify-between w-full gap-10">
        <div>
          <Link href="/">
            <h1 className="header font-bold text-2xl lg:text-4xl">Geopin</h1>
          </Link>
        </div>
        <Nav>
          <ul className="flex flex-col lg:flex-row gap-4 text-xl font-regular lg:text-lg lg:gap-10  w-full grow   h-full lg:items-center">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Company</li>
          </ul>
        </Nav>
      </div>
    </div>
  );
}
