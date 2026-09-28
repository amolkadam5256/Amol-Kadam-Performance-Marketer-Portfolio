"use client";

import Image from "next/image";

export const HEAD_SRC = "/head-2.png";
export const PORTRAIT_SRC = "/Ai_Avtar_Full.png";

type PortraitHeadProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  size?: number;
  src?: string;
};

export function PortraitHead({
  alt = "Amol Kadam",
  className = "",
  priority = false,
  size = 524,
  src = HEAD_SRC,
}: PortraitHeadProps) {
  const isFullBody = src === PORTRAIT_SRC;
  const width = isFullBody ? 900 : size;
  const height = isFullBody ? 1350 : Math.round(size * 1.605);
  return (
    <div className={`portrait-head ${isFullBody ? "is-fullbody" : ""} ${className}`.trim()}>
      <i className="portrait-halo" aria-hidden="true" />
      <i className="portrait-orbit" aria-hidden="true" />
      <i className="portrait-orbit late" aria-hidden="true" />
      <span className="portrait-shadow" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={isFullBody ? "(max-width: 900px) 92vw, 56vw" : "(max-width: 900px) 70vw, 420px"}
        priority={priority}
      />
    </div>
  );
}
