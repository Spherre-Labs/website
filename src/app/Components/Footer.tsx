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
// import Eclipse from "../../../public/Spherre-eclipse.png"; // Commented out because file is missing

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Footer() {
  return (
    <footer className="bg-[#101213] text-gray-400 px-10 relative overflow-hidden" role="contentinfo">
      {/* Eclipse arc light effect at top - commented out due to missing file */}
      {/* <div className="relative w-full overflow-hidden">
        <Image
          src={Eclipse}
          alt="comet"
          width={2000}
          height={40}
          className="mx-auto object-cover object-top lg:mb-[-50%]"
        />
      </div> */}
      {/* Footer Content */}
      <div className="pt-8 sm:pt-10 pb-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {/* Logo Section */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex items-start lg:justify-start justify-center mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-2" aria-label="Spherre Home">
              <Image src={SpherreLogo} alt="Spherre Logo" width={50} height={50}/>
              <span className="text-white text-xl font-semibold">Spherre</span>
            </Link>
          </div>

          {/* Product Section */}
          <nav className="space-y-2 flex flex-col items-center lg:items-end" aria-labelledby="product-heading">
            <h3
              id="product-heading"
              className={`${roboto.className} text-white font-bold text-lg mb-4`}
            >
              Product
            </h3>
            <ul className={`${nunito.className} space-y-3`} role="list">
              <li>
                <Link
                  href="/multisig"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Learn about Spherre Multisig"
                >
                  Multisig
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Learn about Spherre Members"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/threshold"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Learn about Spherre Threshold"
                >
                  Threshold
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources Section */}
          <nav className="space-y-2 flex flex-col items-center lg:items-end" aria-labelledby="resources-heading">
            <h3
              id="resources-heading"
              className={`${roboto.className} text-white font-bold text-lg mb-4`}
            >
              Resources
            </h3>
            <ul className={`${nunito.className} space-y-3`} role="list">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="View Spherre Documentation"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Read Spherre Blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/github"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Visit Spherre on GitHub"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Get Help and Support"
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Section */}
          <nav className="space-y-2 flex flex-col items-center lg:items-end" aria-labelledby="legal-heading">
            <h3
              id="legal-heading"
              className={`${roboto.className} text-white font-bold text-lg mb-4`}
            >
              Legal
            </h3>
            <ul className={`${nunito.className} space-y-3`} role="list">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="View Terms of Service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="View Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Socials Section */}
          <nav className="space-y-2 flex flex-col items-center lg:items-end" aria-labelledby="socials-heading">
            <h3
              id="socials-heading"
              className={`${roboto.className} text-white font-bold text-lg mb-4`}
            >
              Socials
            </h3>
            <ul className={`${nunito.className} space-y-3`} role="list">
              <li>
                <Link
                  href="https://x.com/Spherremultisig"
                  className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Follow Spherre on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={XIcon} alt="Twitter Icon" />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Spherre-Labs"
                  className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Follow Spherre on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={GithubIcon} alt="GitHub Icon" />
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/spherre"
                  className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Follow Spherre on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@spherre"
                  className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Follow Spherre on YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={YoutubeIcon} alt="YouTube Icon" />
                  <span>YouTube</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/spherre_xyz"
                  className="flex items-center gap-2 hover:text-white transition-colors text-[#808080] text-sm"
                  aria-label="Follow Spherre on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={InstagramIcon} alt="Instagram Icon" />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright Section */}
        <div
          className={`${roboto.className} flex flex-col md:flex-row justify-between md:items-center pt-8`}
        >
          <p className="text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Spherre all rights reserved
          </p>
          <Link
            href="mailto:support@spherre.com"
            className="text-sm hover:text-white transition-colors text-[#808080]"
            aria-label="Contact Spherre Support"
          >
            support@spherre.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
