import Link from "next/link";
import Nav from "./nav/nav";
import StickyHeader from "../header/sticky_header/sticky_header";

export default function Navbar() {
  return (
    <div id="navbar" className="fixed">
      <div
        className={`fixed flex flex-wrap row justify-start items-center px-3 pt-3 gap-4 max-w-[var(--max-width)] mx-auto 
            w-full bg-background z-50`}
      >
        <div className="flex justify-between w-full">
          <div>
            a
            <Link href="/">
              <h1 className="header font-bold text-2xl">Geopin</h1>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
}
