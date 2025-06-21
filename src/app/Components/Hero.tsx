"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/HeroImage.png";
import Play from "../../../public/Play.png";
import Arrow from "../../../public/Arrow.png";

const Hero: React.FC = () => {
  return (
    <section
      className="relative text-white border-[1px] border-[#ffffff43] border-t-0 pt-12 sm:pt-16 bg-bottom"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="bg-gray-800 cursor-pointer py-3 px-4 sm:px-6 rounded-full flex flex-row w-fit items-center justify-center gap-3 sm:gap-4">
            <div className="flex gap-2 items-center">
              <Image src={Play} width={10} height={10} alt="Play button icon" />
              <p className="text-xs sm:text-sm">Introduction to Spherre</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <p className="text-xs sm:text-sm opacity-40">Read more</p>
              <Image
                src={Arrow}
                width={20}
                height={10}
                alt="Arrow pointing right"
              />
            </div>
          </div>
        </div>
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
        >
          Collaboration Through Decentralized Security.
        </h1>

        <p className="text-sm sm:text-lg md:text-xl mb-8 mx-auto max-w-3xl">
          Spherre ensures that no single point of failure exists, empowering
          individuals, teams, and organizations with efficient, scalable, and
          low-cost solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 w-full sm:w-auto">
          <button
            className="px-6 py-3 bg-black text-white rounded-full text-base font-medium shadow-md hover:bg-gray-800 transition-all duration-200 w-full sm:w-auto"
            aria-label="Book a demo with Spherre"
          >
            Book a Demo
          </button>
          <button
            className="px-6 py-3 bg-white text-black rounded-full text-base font-medium shadow-md hover:bg-gray-200 transition-all duration-200 w-full sm:w-auto"
            aria-label="Learn more about Spherre"
          >
            Learn More
          </button>
        </div>

        <div className="relative w-full max-w-5xl mt-8 h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[450px] overflow-hidden">
          <Image
            src={HeroImage}
            alt="Spherre platform interface showing collaborative crypto wallet management"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
