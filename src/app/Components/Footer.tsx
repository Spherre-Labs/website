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

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Footer() {
  return (
    <footer
      className="bg-[#101213] text-gray-400"
      role="contentinfo"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
          {/* Logo Section */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1 flex items-start justify-center lg:justify-start mb-6 lg:mb-0">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Spherre Home"
            >
              <Image
                src={SpherreLogo}
                alt="Spherre Logo"
                width={50}
                height={50}
              />
              <span className="text-white text-xl font-semibold">Spherre</span>
            </Link>
          </div>

          {/* Product Section */}
          <nav
            className="space-y-2 flex flex-col items-center sm:items-start"
            aria-labelledby="product-heading"
          >
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
          <nav
            className="space-y-2 flex flex-col items-center sm:items-start"
            aria-labelledby="resources-heading"
          >
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
          <nav
            className="space-y-2 flex flex-col items-center sm:items-start"
            aria-labelledby="legal-heading"
          >
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
          <nav
            className="col-span-2 sm:col-span-1 space-y-2 flex flex-col items-center sm:items-start"
            aria-labelledby="socials-heading"
          >
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
          className={`${roboto.className} flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-8 mt-8 border-t border-gray-800`}
        >
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
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
