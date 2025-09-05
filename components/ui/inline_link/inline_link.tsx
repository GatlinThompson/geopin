import Link from "next/link";
import React from "react";

import styles from "./inline_link.module.css";
import Icon from "../icons/icon";
import { IconName, iconSizes } from "../icons/icon_config";

type InlineLinkProps = {
  children: React.ReactNode;
  icon: IconName;
  iconSize: iconSizes;
  iconColor: string;
  href: string;
};

export default function InlineLink({
  children,
  icon,
  href,
  iconSize,
  iconColor,
}: InlineLinkProps) {
  return (
    <Link href={href} className="w-full">
      <div className="flex gap-4 w-full justify-start">
        {/*Icon Component */}
        <span>
          <Icon icon={icon} color={iconColor} size={iconSize} />
        </span>
        {/*Hover effect on the text and the arrow */}
        <div className="flex gap-4 w-full justify-start hover:text-blue-500 text-xl">
          <span className="">{children}</span>
          <span className="font-bold">-&gt;</span>
        </div>
      </div>
    </Link>
  );
}
