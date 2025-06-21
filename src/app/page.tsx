// import CoreFeats from "./Components/CoreFeats";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import TestimonialSection from "./Components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#101213]">
      <Nav />
      <main className="border border-[#ffffff43] bg-[#101213] mx-10">
        <div
          className="relative"
          role="banner"
          aria-label="Hero section background"
        >
          <Image
            src="/Ellipse.png"
            alt="Hero section background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={80}
            priority
            className="opacity-50"
          />
          <div className="relative z-10">
            <Hero />
          </div>
        </div>
        <Features />
        {/* <CoreFeats/> */}
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
