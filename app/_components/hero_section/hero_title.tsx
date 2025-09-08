import ScrollSider from "@/util/hooks/scroll_slider";
import Image from "next/image";

export default function HeroTitle() {
  return (
    <h1 className="header text-5xl lg:text-6xl tracking-tight transition-transform duration-75 ease-out swoop-up">
      <span className="text-primary-blue">Gelocation&nbsp; </span>
      <span>made simple.&nbsp; </span>
      <br />
      <span className="">
        Finding&nbsp;
        <span>
          the&nbsp;
          <span className="text-primary-blue"> future.</span>
        </span>
      </span>
    </h1>
  );
}
