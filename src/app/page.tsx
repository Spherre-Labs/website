import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="border border-[#7e7a7a] mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-8">
        <Features />
        <Footer />
      </div>
    </>
  );
}
