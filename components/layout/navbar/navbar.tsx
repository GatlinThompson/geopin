import Link from "next/link";
import Nav from "./nav/nav";

export default function Navbar() {
  return (
    <div className="flex flex-wrap row justify-start items-center px-3 py-3 gap-4 max-w-[var(--max-width)] mx-auto w-full">
      <div className="flex justify-between w-full">
        <div>
          <Link href="/">
            <h1 className="header font-bold text-2xl">Geopin</h1>
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
}
