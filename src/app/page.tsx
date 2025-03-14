// import CoreFeats from "./Components/CoreFeats";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import TestimonialSection from "./Components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-[#101213]">
      <Nav />
      <div className="border border-[#ffffff43] bg-[#101213] mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-8">
        <Hero />
        <Features />
        {/* <CoreFeats/> */}
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
}