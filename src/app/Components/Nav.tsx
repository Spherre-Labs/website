"use client";
import Image from "next/image";
import SpherreLogo from "../../public/logo.svg";
import { useState } from "react";
import { FiAlignCenter, FiX } from "react-icons/fi";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 z-50">
      {/* Top Info */}
      <div className="bg-[#6F2FCE] w-full flex justify-center items-center space-x-3 py-3">
        <p>
          <span>🚀</span>
          <span>Join our waitlist</span>
        </p>
        <button className="bg-black text-white border border-white rounded-full w-fit py-1 px-3">
          Join now
        </button>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-4 lg:px-10">
        <div className="flex justify-center items-center space-x-2">
          <Image src={SpherreLogo} alt="Spherre" width={37} height={37} />
          <p className="font-bold text-2xl">Spherre</p>
        </div>
        <div
          className={`fixed md:static flex justify-center items-center inset-x-0 top-0 pt-10 md:pt-0 h-[60vh] md:h-auto transition-all duration-300 md:transition-none -z-[5] ${
            isNavOpen
              ? "translate-x-0 opacity-100 backdrop-blur-md bg-opacity-90 md:backdrop-blur-none md:bg-opacity-100"
              : "-translate-x-full opacity-0 bg-opacity-0 md:translate-x-0 md:opacity-100"
          }`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-5 *:cursor-pointer *:hover:text-[#6F2FCE]">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-black py-2 px-5 rounded-full">
            Open App
          </button>
          <button
            className="z-10 text-center md:hidden flex justify-center items-center cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FiX size={30} /> : <FiAlignCenter size={30} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
