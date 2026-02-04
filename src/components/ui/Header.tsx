import { memo } from 'react';
import { ChevronIcon, BellIcon } from './icons';

export const Header = memo(() => {
  return (
    <header className="h-[80px] bg-[#202F55] flex items-center justify-between px-10 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center mr-[60px]">
          <span className="font-['Days_One'] text-[48px] text-[#40F3F7] leading-none font-weight-800">
            3S
          </span>

          <span className="mx-2 h-[34px] w-px bg-[#4F669D]" />

          <span className="text-[11px] leading-[13px] text-[#4F669D]">
            CPA
            <br />
            NETWORK
          </span>
        </div>

        <nav className="flex gap-10">
          <span className="text-[18px] font-medium tracking-[0.01em]">PAYMENT SYSTEMS</span>
          <span className="text-[18px] font-medium tracking-[0.01em] uppercase">REFERRALS</span>
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1 ml-8 cursor-pointer">
          <span className="text-[18px] font-medium mr-2">$500</span>
          <ChevronIcon />
        </div>

        <div className="flex items-center gap-2 ml-8 cursor-pointer">
          <BellIcon />
          <span className="text-[18px] font-medium">8</span>
        </div>

        <div className="flex items-center gap-2 ml-8 cursor-pointer">
          <span className="text-[18px] font-medium mr-2">profile@mail.ru</span>
          <ChevronIcon />
        </div>

        <div className="flex items-center gap-2 ml-8 cursor-pointer">
          <span className="w-[30px] h-[30px] rounded-full bg-[#F0F0F0]" />
          <span className="text-[18px] font-medium uppercase mr-2">ENG</span>
          <ChevronIcon />
        </div>
      </div>
    </header>
  );
});
