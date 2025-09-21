import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      {/* Logo */}
      <Image
        src="/icon.png"
        alt="ModaWear Logo"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
