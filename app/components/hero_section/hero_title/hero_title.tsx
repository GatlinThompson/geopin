"use client";

import React from "react";
import { useInviewAnimation } from "@/util/hooks/useInviewAnimation";

export default function HeroTitle() {
  return (
    <h1 className="header text-5xl lg:text-6xl tracking-tight">
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
