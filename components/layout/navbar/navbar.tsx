import Link from "next/link";
import Nav from "./nav/nav";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-wrap row justify-start items-center px-3 py-3 gap-4 max-w-[var(--max-width)] mx-auto w-full lg:px-10">
      <div className="flex justify-between w-full gap-10">
        <div>
          <Link href="/">
            <Image
              src="/assets/nav-logo.svg"
              alt="logo"
              width={100}
              height={48}
              className="h-7 w-auto  lg:h-10"
            />
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
