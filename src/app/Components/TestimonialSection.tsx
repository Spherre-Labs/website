"use client";
import React, { useEffect, useRef } from "react";

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
        "Our startup relies on Sphere for team-based asset management. It gives us peace of mind knowing that funds can’t move without collective approval.",
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
        "Sphere made our DAO’s treasury management seamless and ultra-secure. The multisig setup ensures no single entity controls the assets, which is a game-changer.",
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
        "Sphere revolutionized how we manage shared assets. No single point of failure means we’re always protected.",
      avatar: "/t6.png",
      hasBadge: true,
    },
    {
      name: "Mark Benimaro",
      role: "DAD Treasurer",
      content:
        "Finally, a multisig wallet that is scalable, affordable, and easy to use. Starknet’s efficiency combined with Sphere’s security is unbeatable.",
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
        "Starknet’s speed and Sphere’s security make it the perfect combination for managing large-scale digital transactions.",
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
        "Sphere is hands down the best multisig wallet I’ve used. Highly recommend it for anyone managing digital assets collaboratively.",
      avatar: "/t12.png",
    },
  ],
];

const TestimonialSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= container.scrollHeight / 2) {
          scrollAmount = 0;
        }
        container.scrollTop = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-[#101213] py-16 ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden h-[91px]  border-[1px] border-[#ffffff43] ">
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
        <div className=" border-[1px] border-[#ffffff43] border-b-0 p-4 ">
          <h2 className="md:text-[2.5rem] text-xl font-extrabold">
            <span className="text-white">Loved by Teams & </span>
            <span className="text-gray-400">Organizations Worldwide</span>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden h-[600px]  border-[1px] border-[#ffffff43] "
        >
          <div className="grid grid-rows-3">
            {[...testimonials, ...testimonials].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 relative"
              >
                {row.map((testimonial, index) => (
                  <div key={index} className=" p-4 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-white">
                            {testimonial.name}
                          </span>
                          {testimonial.hasBadge && (
                            <svg
                              className="w-3 h-3 text-blue-400"
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
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                ))}

                <div className="hidden lg:block absolute top-0 bottom-0 right-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
                <div className="hidden lg:block absolute top-0 bottom-0 left-[75.5%] transform -translate-x-1/2 border-l border-dashed border-[#FFFFFF43]"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden h-[91px]  border-[1px] border-[#ffffff43] ">
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
      </div>
    </div>
  );
};

export default TestimonialSection;
