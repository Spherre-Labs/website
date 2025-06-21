"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Signature from "../../../public/Signature.png";
import Approval from "../../../public/Approval.png";
import StarknetButton from "../../../public/Starknet-Button.png";
import walletsetup from "../../../public/mywalletsetup.png";
import Mymembersmgt from "../../../public/mymembermgt.png";
import Threshold from "../../../public/Threshold.png";
import mgttransactions from "../../../public/mytransactionsmgt.png";
import Rolemgt from "../../../public/Rolemgt.png";
import Transactionmgt from "../../../public/Transactionmgt.png";
import justmembers from "../../../public/justmembers.png";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  hasBadge?: boolean;
}

const testimonials: Testimonial[][] = [
  [
    {
      name: "Alex Jephson",
      role: "eJephs24",
      content:
        "Sphere has revolutionized the way our team manages funds. The security and collaboration features are unparalleled!",
      avatar: "/t1.png",
      hasBadge: true,
    },
    {
      name: "Sophia R",
      role: "eJephs24",
      content:
        "Our startup relies on Sphere for team-based asset management. It gives us peace of mind knowing that funds can't move without collective approval.",
      avatar: "/t2.png",
    },
    {
      name: "Nancy K",
      role: "eJephs24",
      content:
        "The role-based permissions are a lifesaver. Our organization can now approve transactions in a secure and structured way.",
      avatar: "/t3.png",
      hasBadge: true,
    },
    {
      name: "Alice Mccan",
      role: "Crypto Investor",
      content:
        "Sphere made our DAO's treasury management seamless and ultra-secure. The multisig setup ensures no single entity controls the assets, which is a game-changer.",
      avatar: "/t4.png",
    },
  ],
  [
    {
      name: "Laura P",
      role: "eJephs24",
      content:
        "Multisig has never been this intuitive! Sphere provides an unmatched experience in managing digital assets securely with my team.",
      avatar: "/t5.png",
    },
    {
      name: "Ben S",
      role: "eJephs24",
      content:
        "Sphere revolutionized how we manage shared assets. No single point of failure means we're always protected.",
      avatar: "/t6.png",
      hasBadge: true,
    },
    {
      name: "Mark Benimaro",
      role: "DAD Treasurer",
      content:
        "Finally, a multisig wallet that is scalable, affordable, and easy to use. Starknet's efficiency combined with Sphere's security is unbeatable.",
      avatar: "/t7.png",
    },
    {
      name: "James C*",
      role: "eJephs24",
      content:
        "With Sphere, we eliminated the risks of centralized control. Our business operates with enhanced security and efficiency.",
      avatar: "/t8.png",
    },
  ],
  [
    {
      name: "Daniel F.",
      role: "eJephs24",
      content:
        "Starknet's speed and Sphere's security make it the perfect combination for managing large-scale digital transactions.",
      avatar: "/t9.png",
    },
    {
      name: "Mark Oliver®",
      role: "eJephs24",
      content:
        "Sphere has revolutionized the way our team manages funds. The security and collaboration features are unparalleled!",
      avatar: "/t10.png",
      hasBadge: true,
    },
    {
      name: "Helen R",
      role: "eheenrt",
      content:
        "Low fees, high security, and easy collaboration make Sphere the best multisig solution available today.",
      avatar: "/t11.png",
    },
    {
      name: "Kelvin Bumas",
      role: "eJephs24",
      content:
        "Sphere is hands down the best multisig wallet I've used. Highly recommend it for anyone managing digital assets collaboratively.",
      avatar: "/t12.png",
    },
  ],
];

const steps = [
  {
    number: 1,
    title: "Create or connect your existing wallet to Sphere's platform.",
    image: walletsetup,
    imageAlt: "Wallet setup interface",
  },
  {
    number: 2,
    title: "Invite and assign members to your multi-signature account.",
    image: Mymembersmgt,
    imageAlt: "Members management interface",
  },
  {
    number: 3,
    title: "Set your transaction threshold and manage roles securely.",
    image: mgttransactions,
    imageAlt: "Threshold configuration interface",
  },
  // Add more steps as needed
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] p-6 rounded-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center gap-4 mb-4 ">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-red-500 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-medium text-white">
              {testimonial.name}
            </span>
            {testimonial.hasBadge && (
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p className="text-sm text-[#666666]">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-[14px] leading-relaxed text-[#A3A3A3] line-clamp-3">
        &quot;{testimonial.content}&quot;
      </p>
    </motion.div>
  );
};

const TestimonialColumn: React.FC<{
  testimonials: Testimonial[];
  direction: "up" | "down";
  columnIndex: number;
}> = ({ testimonials, direction, columnIndex }) => {
  return (
    <div
      className={`relative h-[600px] overflow-hidden ${
        columnIndex > 0 ? "hidden md:block" : ""
      }`}
    >
      <motion.div
        className="flex flex-col gap-2"
        animate={{
          y: direction === "up" ? [-1200, 0] : [0, -1200],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <TestimonialCard
              key={`${direction}-${index}`}
              testimonial={testimonial}
            />
          ),
        )}
      </motion.div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const columns = testimonials[0].map((_, columnIndex) =>
    testimonials.map((row) => row[columnIndex]),
  );

  const [index, setIndex] = useState(0);

  return (
    <div className="bg-[#101213] py-16">
      <div className="w-full mx-auto">
        {/* Top dashed border section */}
        <div className="overflow-hidden h-[91px] border-[1px] border-[#ffffff43]">
          <div className="grid grid-rows-3">
            {[...testimonials, ...testimonials].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 relative"
              >
                {row.map((_, index) => (
                  <div key={index} className=""></div>
                ))}

                <div className="hidden lg:block absolute top-0 bottom-0 right-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden lg:block absolute top-0 bottom-0 left-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col ml-5 md:ml-20 py-12">
            <div className="w-[90rem]">
              <div className="flex items-center gap-1">
                <Image src={Signature} alt="signature" width={20} height={20} />
                <p className="opacity-60 text-[18px] md:text-[24px] tracking-wider">
                  Multi signature operation
                </p>
              </div>
              <p className="font-bold text-xl w-[58%] md:w-full md:text-[30px] pr-[33rem] leading-[36px] md:leading-[42px]">
                Requires approval from designated account members for most{" "}
                <span className="opacity-40">
                  write operations, extending beyond just fund transfers.
                </span>
              </p>
            </div>
          </div>
          <div className="mt-[-25%] flex justify-start mx-20">
            <Image
              src={Approval}
              alt="Approval"
              width={2800}
              height={200}
              className=""
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-t justify-between px-4 md:px-20 border-[#ffffff43] border-b-0 relative">
          {/* Left panel */}
          <div className="flex flex-col py-8 md:py-12 w-full md:w-1/2 md:pr-10">
            <div className="w-full md:w-[494px]">
              <div className="flex items-center gap-1">
                <Image src={Signature} alt="signature" width={20} height={20} />
                <p className="opacity-60 text-[18px] md:text-[24px] tracking-wider">
                  Members Management
                </p>
              </div>
              <p className="font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[42px]">
                Enables the addition and removal of members within{" "}
                <span className="opacity-40">the multi-signature account.</span>
              </p>
            </div>
            <Image
              src={justmembers}
              alt="Approval"
              width={850}
              height={100}
              className="my-12 md:my-44"
            />
          </div>

          {/* Center divider - responsive positioning */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#ffffff43] transform -translate-x-1/2"></div>

          {/* Horizontal divider for mobile - only visible on small screens */}
          <div className="block md:hidden w-full h-[1px] bg-[#ffffff43] my-6 -mx-4">
            {/* Negative margin to counteract the parent padding */}
          </div>

          {/* Right panel */}
          <div className="flex flex-col py-8 md:py-12 w-full md:w-1/2 md:pl-10">
            <div className="w-full md:w-[484px]">
              <div className="flex items-center gap-1">
                <Image src={Signature} alt="signature" width={20} height={20} />
                <p className="opacity-60 text-[18px] md:text-[24px] tracking-wider">
                  Threshold Configuration
                </p>
              </div>
              <p className="font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[42px]">
                Allows users to set the minimum number of required{" "}
                <span className="opacity-40">
                  signatures to authorize a multi-signature operation.
                </span>
              </p>
            </div>
            <Image
              src={Threshold}
              alt="Approval"
              width={850}
              height={200}
              className=" mx-auto mt-[-20%]"
            />
          </div>
        </div>

        <div className="border-t border-[#ffffff43] border-b-0">
          <div className="px-4 md:pl-20 py-8 md:py-20">
            <div className="flex items-center gap-1">
              <Image src={Signature} alt="signature" width={20} height={20} />
              <p className="opacity-60 text-[18px] md:text-[24px] tracking-wider">
                Role Management
              </p>
            </div>
            <p className="font-bold text-[22px] md:text-[30px] leading-[36px] md:leading-[42px] w-full md:w-[963px]">
              Provides the ability to assign and revoke{" "}
              <span className="opacity-40">
                specific roles for account members.
              </span>
            </p>
          </div>
          <Image
            src={Rolemgt}
            alt="Approval"
            width={2600}
            height={100}
            className="mb-12 md:mb-28 px-20 mt-[-20%]"
          />
        </div>

        <div className="border-t border-[#ffffff43] border-b-0">
          <div className="px-4 md:pl-20 py-8 md:py-20 w-full md:w-[905px]">
            <div className="flex items-center gap-1">
              <Image src={Signature} alt="signature" width={20} height={20} />
              <p className="opacity-60 text-[18px] md:text-[24px] tracking-wider">
                Transaction Management
              </p>
            </div>
            <p className="font-bold text-[22px] md:text-[30px] leading-[36px] md:leading-[42px] w-full md:w-[963px]">
              Covers the entire transaction lifecycle, including proposal{" "}
              <span className="opacity-40">
                submission, member approval or rejection, and final execution.
              </span>
            </p>
          </div>
          <Image
            src={Transactionmgt}
            alt="Approval"
            width={2600}
            height={100}
            className="mb-12 md:mb-28 mx-auto mt-[-15%] px-20"
          />
        </div>

        <div>
          <div className="flex flex-col md:flex-row text-[28px] md:text-[40px] font-bold justify-center items-center py-8 md:py-12 border-t border-t-[#ffffff43] px-4 text-center md:text-left">
            <p>Enhance performance with</p>
            <Image
              src={StarknetButton}
              alt="Starknet-Button"
              width={163}
              height={100}
              className="px-2 my-2 md:my-0"
            />
            <p>Integration</p>
          </div>

          {/* start here */}
          <div className="border-t border-[#ffffff43]">
            <div className="mx-auto py-8 md:py-20">
              <div className="mb-8 md:mb-16 px-4 md:pl-20">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  Simplified Steps to
                </h2>
                <h3 className="text-2xl md:text-4xl text-gray-400 font-bold mb-4 md:mb-8">
                  Secure Collaboration
                </h3>
                <p className="text-base md:text-lg text-gray-300 w-full md:w-[825px] opacity-80">
                  Built on Starknet&apos;s Layer 2 technology, Spherre ensures
                  that no single point of failure exists, empowering
                  individuals, teams, and organizations with efficient,
                  scalable, and low-cost solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-0">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`border-t border-l border-b border-r md:border-r-0 border-[#ffffff43] p-6 md:p-8 transition-colors duration-300 ${
                      i === index ? "bg-[#1E2021]" : ""
                    }`}
                  >
                    <div className="flex flex-col h-full items-center">
                      <div className="mb-6">
                        <span className="w-8 h-8 flex items-center justify-center text-white font-bold">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-center">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <StepsCarousel index={index} setIndex={setIndex} />
            </div>
          </div>
          {/* finish here */}
        </div>
        <div className="border-[1px] border-[#ffffff43] border-b-0 p-4 md:p-8">
          <h2 className="md:text-[2.5rem] text-xl font-extrabold">
            <span className="text-white">Loved by Teams & </span>
            <span className="text-gray-400">Organizations Worldwide</span>
          </h2>
        </div>

        <div className="border-[1px] border-[#ffffff43] relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {columns.map((columnTestimonials, index) => (
              <TestimonialColumn
                key={index}
                testimonials={columnTestimonials}
                direction={index % 2 === 0 ? "up" : "down"}
                columnIndex={index}
              />
            ))}
          </div>

          {/* Dashed borders */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
        </div>

        {/* Bottom dashed border section */}
        <div className="overflow-hidden h-[91px] border-[1px] border-[#ffffff43]">
          <div className="grid grid-rows-3">
            {[...testimonials, ...testimonials].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 relative"
              >
                {row.map((_, index) => (
                  <div key={index} className=""></div>
                ))}

                <div className="hidden lg:block absolute top-0 bottom-0 right-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden lg:block absolute top-0 bottom-0 left-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="bg-[#101213] text-white py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 px-4 sm:px-12 md:px-16 lg:px-72">
              Enhance <span className="opacity-60">Security</span> & Streamline{" "}
              <span className="text-blue-500">Collaboration</span> For Your
              Digital <span className="text-purple-500">Assets</span>.{" "}
              <span className="opacity-60">Designed</span> For{" "}
              <span className="text-purple-500">Individuals</span> & Teams
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 md:mt-8">
              <button className="px-6 py-3 bg-white font-bold text-black rounded-full text-base shadow-md transition-all duration-200 mx-4 sm:mx-0 mb-4 sm:mb-0">
                Get Early Access
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-full text-base font-bold shadow-md transition-all duration-200 mx-4 sm:mx-0">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function StepsCarousel({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [setIndex]);

  const current = steps[index];

  return (
    <div className="flex flex-col gap-2 mt-8 md:mt-16 pb-8 md:pb-16 px-4 md:pl-20 border-b border-[#ffffff43]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-[#ffffff43]">
            <span className="text-base md:text-lg font-bold">
              {current.number}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 w-full md:w-[611px]">
            {current.title}
          </h3>
          <div className="w-full overflow-x-auto mt-8">
            <Image
              src={current.image}
              alt={current.imageAlt}
              height={3000}
              className="min-w-full"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TestimonialSection;
