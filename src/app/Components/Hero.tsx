"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/HeroImage.png";
import Play from "../../../public/Play.png";
import Arrow from "../../../public/Arrow.png";

const Hero: React.FC = () => {
  return (
    <section 
      className="relative text-white border-[1px] border-[#ffffff43] border-t-0 py-16 bg-bottom"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="bg-gray-800 cursor-pointer py-3 mx-auto px-14 rounded-full flex w-fit items-center gap-4 md:gap-2">
            <div className="flex gap-2 items-center">
              <Image src={Play} width={10} height={10} alt="Play button icon" />
              <p className="text-xs md:text-sm">Introduction to Spherre</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs md:text-sm opacity-40">Read more</p>
              <Image src={Arrow} width={20} height={10} alt="Arrow pointing right" />
            </div>
          </div>
        </div>
        <h1 
          id="hero-heading"
          className="text-2xl md:text-4xl md:text-6xl font-bold mb-4 w-[50%] mx-auto"
        >
          Collaboration Through Decentralized Security.
        </h1>
      </div>

      <div className="">
        <div>
          <p className="text-xs md:text-lg md:text-xl mb-8 mx-auto max-w-3xl">
            Spherre ensures that no single point of failure exists, empowering
            individuals, teams, and organizations with efficient, scalable, and
            low-cost solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button 
              className="px-6 py-3 bg-black text-white rounded-full text-base font-medium shadow-md hover:bg-gray-800 transition-all duration-200"
              aria-label="Book a demo with Spherre"
            >
              Book a Demo
            </button>
            <button 
              className="px-6 py-3 bg-white text-black rounded-full text-base font-medium shadow-md hover:bg-gray-200 transition-all duration-200"
              aria-label="Learn more about Spherre"
            >
              Learn More
            </button>
          </div>

          <Image
            src={HeroImage}
            width={800}
            height={100}
            alt="Spherre platform interface preview"
            className="mx-auto block md:hidden"
            priority
          />
        </div>

        {/* Hero Image - Position at bottom and make larger */}
        <div className="relative mt-4 mx-auto w-full max-w-5xl h-50vh md:h-[450px]">
          <div className="absolute left-0 right-0 -bottom-[24.65rem]">
            <Image
              src={HeroImage}
              alt="Spherre platform interface showing collaborative crypto wallet management"
              width={1000}
              height={600}
              className="mx-auto hidden md:block"
              priority
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
