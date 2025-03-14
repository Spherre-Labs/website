"use client";
import Link from "next/link";
import { Nunito_Sans, Roboto_Mono } from "next/font/google";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
  SpherreLogo,
} from "../../../public/icons";
import Image from "next/image";
import Eclipse from "../../../public/Spherre-eclipse.png";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Footer() {
  return (
    <footer className="bg-[#101213] text-gray-400 p-0 md:py-12 relative overflow-hidden">
      {/* Eclipse arc light effect at top */}
      {/* Eclipse arc light effect at top - responsive height and clip path */}
      <div className="relative w-full overflow-hidden" style={{ height: '350px' }}>
        <Image
          src={Eclipse}
          alt="comet"
          width={1500}
          height={800}
          className="w-full mx-auto object-cover object-top"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 60%)",
            height: '100%'
          }}
          priority
        />
      </div>
      {/* Footer Content */}
      <div className="container mx-auto px-4 space-y-[72px] max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start w-full justify-between gap-12">
          {/* Logo Section */}
          <div className="md:col-span-3 md:w-1/5">
            <Link href="/" className="flex items-center gap-2">
              <Image src={SpherreLogo} alt="Spherre Logo" />
              <span className="text-white text-xl font-semibold">Spherre</span>
            </Link>
          </div>

          {/* Grid Sections */}
          <div className="grid grid-cols-2 gap-10 sm:gap-0 sm:flex justify-between w-full">
            {/* Product Section */}
            <div className="md:col-span-2 space-y-7">
              <h3 className={`${roboto.className} text-white font-bold text-lg mb-4`}>
                Product
              </h3>
              <ul className={`${nunito.className} space-y-3`}>
                <li>
                  <Link
                    href="/multisig"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Multisig
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="/threshold"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Threshold
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="md:col-span-2 space-y-7">
              <h3 className={`${roboto.className} text-white font-bold text-lg mb-4`}>
                Resources
              </h3>
              <ul className={`${nunito.className} space-y-3`}>
                <li>
                  <Link
                    href="/documentation"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/github"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Help & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="md:col-span-2 space-y-7">
              <h3 className={`${roboto.className} text-white font-bold text-lg mb-4`}>
                Legal
              </h3>
              <ul className={`${nunito.className} space-y-3`}>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className="md:col-span-3 space-y-7">
              <h3 className={`${roboto.className} text-white font-bold text-lg mb-4`}>
                Socials
              </h3>
              <ul className={`${nunito.className} space-y-3`}>
                <li>
                  <Link
                    href="https://twitter.com"
                    className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    <Image src={XIcon} alt="Twitter Icon" />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com"
                    className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    <Image src={GithubIcon} alt="GitHub Icon" />
                    <span>GitHub</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com"
                    className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    <Image src={YoutubeIcon} alt="YouTube Icon" />
                    <span>YouTube</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  >
                    <Image src={InstagramIcon} alt="Instagram Icon" />
                    <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`${roboto.className} flex flex-col md:flex-row justify-between md:items-center pt-8 border-t border-gray-800`}
        >
          <p className="text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Spherre all rights reserved
          </p>
          <Link
            href="mailto:support@spherre.com"
            className="text-sm hover:text-white transition-colors text-[#808080]"
          >
            support@spherre.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
