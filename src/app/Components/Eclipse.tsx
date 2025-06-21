"use client";
import Image from "next/image";
import EclipseImage from "../../../public/Spherre-eclipse.png";

export default function Eclipse() {
  return (
    <div className="relative w-full h-[70px] sm:h-[80px] md:h-[100px] lg:h-[130px] xl:h-[300px] 2xl:h-[600px] overflow-hidden bg-[#101213]">
      <Image
        src={EclipseImage}
        alt="Clipped eclipse showing the top glowing arc"
        width={2000}
        height={1000}
        className="w-[50%] h-auto object-cover absolute top-0 left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
}