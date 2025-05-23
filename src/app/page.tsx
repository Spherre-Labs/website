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
      <div className="border border-[#ffffff43] bg-[#101213] mx-10">
        <div
          style={{
            backgroundImage: "url('/Ellipse.png')",
            backgroundSize: "120%",
            width: "100%",
            height: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Hero />
        </div>
        <Features />
        {/* <CoreFeats/> */}
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
}
