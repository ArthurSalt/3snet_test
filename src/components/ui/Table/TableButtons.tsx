import { memo } from "react";
import { ChevronIcon } from "../icons";

type TableButtonsType = {
  handlePrev: () => void;
  handleNext: () => void;
}

export const TableButtons = memo(({ handlePrev, handleNext }: TableButtonsType) => (
  <div className="flex items-center my-8">
    <button className="border border-[#D6E3EC] rounded-lg px-4 py-2 text-[#4F669D] font-medium flex items-center gap-2">
      Year 2025
      <ChevronIcon />
    </button>
    <div className='flex-1' />
    <button
      onClick={handlePrev}
      className="w-10 h-10 border border-[#DDDEDF] rounded-lg flex items-center justify-center"
    >
      <ChevronIcon className='rotate-135 w-2 h-2 border-[#202F55]' />
    </button>
    <button
      onClick={handleNext}
      className="w-10 h-10 border border-[#DDDEDF] rounded-lg flex items-center justify-center ml-8"
    >
      <ChevronIcon className='rotate-315 w-2 h-2 border-[#202F55]' />
    </button>
    <button className="ml-8 bg-[#202F55] text-white rounded-lg px-6 py-2 font-medium flex items-center gap-2">
      + Add plan
    </button>
  </div>
))