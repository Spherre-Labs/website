import React from "react";

function Features() {
  return (
    <div>
      <section className="flex items-center justify-center text-white px-6">
        <div className="max-w-4xl  text-center">
          <div className="text-base sm:text-base md:text-[30px]  lg:text-[42px] font-semibold leading-relaxed text-center flex flex-col md:gap-y-4 lg:gap-y-8 pt-16">
            <p>Secure, scalable, and user-friendly</p>
            <p className="font-bold">
              multisig sol
              <span className="text-[#9fa0a1]">utions built on Starknet for</span>
            </p>
            <p className="text-[#9fa0a1]">
              individuals, teams, and organizations.
            </p>
          </div>

          <button className="mt-6 px-4 md:px-8 py-3 bg-white text-black rounded-full text-base sm:text-xs font-medium shadow-md hover:bg-gray-200 transition-all duration-200">
            Explore All Features
          </button>
        </div>

      </section>

    </div>
  );
}

export default Features;
