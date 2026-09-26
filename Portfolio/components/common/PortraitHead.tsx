"use client";

import Image from "next/image";

export const HEAD_SRC = "/head-2.png";

type PortraitHeadProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  size?: number;
};

export function PortraitHead({
  alt = "Amol Kadam",
  className = "",
  priority = false,
  size = 524,
}: PortraitHeadProps) {
  return (
    <div className={`portrait-head ${className}`}>
      <i className="portrait-halo" aria-hidden="true" />
      <i className="portrait-orbit" aria-hidden="true" />
      <i className="portrait-orbit late" aria-hidden="true" />
      <span className="portrait-shadow" aria-hidden="true" />
      <Image src={HEAD_SRC} alt={alt} width={size} height={Math.round(size * 1.605)} priority={priority} />
    </div>
  );
}
