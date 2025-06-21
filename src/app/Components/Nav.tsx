"use client";
import Image from "next/image";
import { SpherreLogo } from "../../../public/icons";
import { useState, useEffect } from "react";
import { FiAlignCenter, FiX } from "react-icons/fi";
import ConstructionModal from "./ConstructionModal";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling when nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleAppClick = () => {
    setIsModalOpen(true);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <header className="relative z-50">
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
      <nav className="flex justify-between items-center py-5 px-4 lg:px-10 bg-[#101213]">
        <div className="flex justify-center items-center space-x-2">
          <Image src={SpherreLogo} alt="Spherre" width={37} height={37} />
          <p className="font-bold text-sm md:text-2xl">Spherre</p>
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul className="md:flex justify-center gap-14 items-center cursor-pointer hidden">
            <li className="hover:underline">Docs</li>
            <li className="hover:underline">Telegram</li>
            <li className="hover:underline">
              <a href="https://x.com/Spherremultisig" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex space-x-3">
          <button
            onClick={handleAppClick}
            className="bg-white text-black py-2 px-5 rounded-full hidden md:block hover:bg-gray-100 transition-colors"
          >
            Open App
          </button>
          <button
            className="z-50 text-center md:hidden flex justify-center items-center cursor-pointer"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <FiX size={30} className="text-white" />
            ) : (
              <FiAlignCenter size={30} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      {isNavOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#101213] z-40 md:hidden flex flex-col items-center justify-start`}
        >
          <ul className="flex flex-col gap-14 items-center text-white text-2xl">
            <li className="hover:underline" onClick={toggleNav}>
              Docs
            </li>
            <li className="hover:underline" onClick={toggleNav}>
              Telegram
            </li>
            <li className="hover:underline" onClick={toggleNav}>
              <a href="https://x.com/Spherremultisig" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <button
                onClick={handleAppClick}
                className="bg-white text-black py-2 px-8 rounded-full text-xl mt-8 hover:bg-gray-100 transition-colors"
              >
                Open App
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Construction Modal */}
      <ConstructionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
