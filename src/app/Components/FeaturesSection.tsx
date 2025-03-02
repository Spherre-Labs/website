'use client';
import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    image: '/wallet.png',
    title: 'Set Up Your Wallet',
    details: 'Create or connect your existing wallet to Spherre’s platform.',
  },
  {
    image: '/invite.png',
    title: 'Invite & Assign Members',
    details:
      'Add trusted individuals, teams, or organizations to your multisig wallet. Assign roles, approval thresholds, and access levels based on your requirements.',
  },
  {
    image: '/card.png',
    title: 'Manage Transactions',
    details:
      'Propose, review, and approve transactions collaboratively with complete transparency.',
  },
];
const FeaturesSection = () => {
  const [featureIndex, setFeatureIndex] = useState(0);

  const handleClick = (index: number) => {
    setFeatureIndex(index);
  };

  return (
    <div className="flex flex-col h-full px-4 md:px-6 lg:px-8 bg-[#101213] pb-16">
      <div className="flex h-full justify-between relative border-l-2 border-white/10">
        {features.map((feature, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="flex w-full group flex-col border-r-2 border-white/10 relative p-[16px] lg:p-[32px]"
            >
              <div
                className={`group-hover:opacity-80 group-active:opacity-100 gap-[16px] lg:gap-[24px] flex flex-col ${
                  index === featureIndex ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  height={30}
                  width={30}
                />
                <h1 className="text-[18px] text-start leading-[24.55px] font-bold">
                  {feature.title}
                </h1>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex-1 h-full w-full px-[16px] py-[24px] md:p-[32px] min-h-[320px] md:min-h-[616px] flex flex-col relative border-2 border-white/10">
        <div className="max-w-[611px] flex-wrap gap-[16px] lg:gap-[24px] flex flex-col">
          <div className="border rounded-full h-[40px] w-[40px] lg:h-[45px] lg:w-[45px] flex items-center justify-center">
            <h1 className="text-[18px] leading-[32px] font-bold tracking-[1px]">
              {featureIndex + 1}
            </h1>
          </div>
          <div className="text-2xl md:text-3xl text-wrap leading-[42px] font-semibold tracking-[2%]">
            {features[featureIndex].details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
