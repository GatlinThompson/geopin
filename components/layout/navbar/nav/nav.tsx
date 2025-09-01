import DesktopNav from "../desktop_nav/desktop_nav";
import MobileNav from "../mobile_nav/mobile_nav";

type NavProps = {
  children?: React.ReactNode;
};

export default function Nav({ children }: NavProps) {
  return (
    <>
      <div
        id="mobile-nav"
        className="flex justify-end flex-grow lg:hidden pb-3"
      >
        <MobileNav>{children}</MobileNav>
      </div>
      <div id="desktop-nav" className="hidden lg:flex pb-3">
        <DesktopNav>{children}</DesktopNav>
      </div>
    </>
  );
}
